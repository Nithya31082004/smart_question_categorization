import requests

def get_youtube_links(query, api_key, max_results=5):
    search_url = "https://www.googleapis.com/youtube/v3/search"
    params = {
        "part": "snippet",
        "q": query,
        "key": api_key,
        "maxResults": max_results,
        "type": "video"
    }

    response = requests.get(search_url, params=params)
    if response.status_code == 200:
        data = response.json()
        video_links = [f"https://www.youtube.com/watch?v={item['id']['videoId']}" for item in data.get("items", [])]
        return video_links
    else:
        return ["Error: Unable to fetch data. Check your API key and quota."]

if __name__ == "__main__":
    API_KEY = "AIzaSyAGtjDc-6-oHbIb_ChhozbOtTrnUaHTo9s"  # Replace with your YouTube Data API key
    topic = input("Enter a topic: ")
    links = get_youtube_links(topic, API_KEY)

    print("Here are some YouTube videos for your topic:")
    for link in links:
        print(link)
