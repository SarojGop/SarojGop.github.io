import scholarly
from bs4 import BeautifulSoup
import json
from datetime import datetime
import os
import time

def get_scholar_info(scholar_id='Zt79RTIAAAAJ', max_retries=5):
    """Fetch Google Scholar information with retries"""
    for attempt in range(max_retries):
        try:
            # Search for the author by name
            search_query = scholarly.scholarly.search_author('Saroj Gopali')
            author = next(search_query)
            author = scholarly.scholarly.fill(author, sections=['basics', 'indices', 'publications'])
            
            # Get detailed information
            scholar_data = {
                'name': author.get('name', ''),
                'affiliation': author.get('affiliation', ''),
                'citations': author.get('citedby', 0),
                'h_index': author.get('hindex', 0),
                'i10_index': author.get('i10index', 0),
                'interests': author.get('interests', []),
                'publications': []
            }
            
            # Get publications
            publications = author.get('publications', [])
            for pub in publications:
                try:
                    pub_filled = scholarly.scholarly.fill(pub)
                    scholar_data['publications'].append({
                        'title': pub_filled['bib']['title'],
                        'authors': pub_filled['bib'].get('author', ''),
                        'venue': pub_filled['bib'].get('venue', ''),
                        'year': pub_filled['bib'].get('year', ''),
                        'citations': pub_filled.get('num_citations', 0),
                        'url': pub_filled.get('pub_url', '')
                    })
                except Exception as e:
                    print(f"Error fetching publication details: {e}")
                    continue
                
                # Add delay to avoid rate limiting
                time.sleep(1)
            
            return scholar_data
        except Exception as e:
            print(f"Attempt {attempt + 1} failed: {e}")
            if attempt < max_retries - 1:
                time.sleep(5)  # Wait before retrying
            else:
                print("All attempts failed")
                return None

def update_html_with_scholar_data(scholar_data, html_file='index.html'):
    """Update the HTML file with scholar information"""
    try:
        if not os.path.exists(html_file):
            print(f"HTML file not found: {html_file}")
            return False
            
        with open(html_file, 'r', encoding='utf-8') as f:
            soup = BeautifulSoup(f.read(), 'html.parser')
        
        # Find the research section
        research_section = soup.find('section', {'id': 'research'})
        if not research_section:
            print("Research section not found in HTML")
            return False
            
        # Update scholar metrics
        metrics_html = f"""
        <div class="scholar-metrics">
            <div class="metric-item">
                <span class="metric-label">Citations</span>
                <span class="metric-value">{scholar_data['citations']}</span>
            </div>
            <div class="metric-item">
                <span class="metric-label">h-index</span>
                <span class="metric-value">{scholar_data['h_index']}</span>
            </div>
            <div class="metric-item">
                <span class="metric-label">i10-index</span>
                <span class="metric-value">{scholar_data['i10_index']}</span>
            </div>
        </div>
        """
        
        # Insert metrics after the scholar profile link
        scholar_profile = research_section.find('div', {'class': 'scholar-profile'})
        if scholar_profile:
            # Remove existing metrics if present
            existing_metrics = research_section.find('div', {'class': 'scholar-metrics'})
            if existing_metrics:
                existing_metrics.decompose()
            
            metrics_soup = BeautifulSoup(metrics_html, 'html.parser')
            scholar_profile.insert_after(metrics_soup)
        
        # Update publications
        publications_div = research_section.find('div', {'class': 'publications'})
        if publications_div:
            publications_div.clear()
            
            for pub in scholar_data['publications']:
                pub_html = f"""
                <article class="publication">
                    <h3>
                        <a href="{pub['url']}" target="_blank">
                            {pub['title']}
                        </a>
                    </h3>
                    <p class="authors">{pub['authors']}</p>
                    <p class="venue">{pub['venue']}</p>
                    <div class="pub-meta">
                        <span class="year">{pub['year']}</span>
                        <span class="citations">Citations: {pub['citations']}</span>
                    </div>
                </article>
                """
                pub_soup = BeautifulSoup(pub_html, 'html.parser')
                publications_div.append(pub_soup)
        
        # Save the updated HTML
        with open(html_file, 'w', encoding='utf-8') as f:
            f.write(str(soup))
            
        # Save scholar data to JSON for caching
        with open('scholar_data.json', 'w', encoding='utf-8') as f:
            json.dump({
                'last_updated': datetime.now().isoformat(),
                'data': scholar_data
            }, f, indent=2)
            
        return True
        
    except Exception as e:
        print(f"Error updating HTML: {e}")
        return False

if __name__ == "__main__":
    print("Starting scholar information update...")
    
    # Fetch scholar data
    scholar_data = get_scholar_info()
    if scholar_data:
        # Update HTML
        success = update_html_with_scholar_data(scholar_data)
        if success:
            print("Successfully updated scholar information!")
        else:
            print("Failed to update HTML file.")
            exit(1)  # Exit with error for GitHub Actions
    else:
        print("Failed to fetch scholar data.")
        exit(1)  # Exit with error for GitHub Actions 
