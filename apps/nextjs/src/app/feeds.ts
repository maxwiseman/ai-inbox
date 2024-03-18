export const feeds: FeedSource[] = [
  {
    title: "New York Times",
    icon: `<svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 13.9 18.6"
                  >
                    <path
                      fill="currentColor"
                      d="M13.9,2.5C13.9.5,12,0,10.5,0V.3c.9,0,1.6.3,1.6,1a1.05872,1.05872,0,0,1-1.2,1,12.95853,12.95853,0,0,1-3.3-.8A13.27527,13.27527,0,0,0,4.1.7,3.27043,3.27043,0,0,0,.7,3.9,2.31777,2.31777,0,0,0,2.2,6.1l.1-.2a1.05381,1.05381,0,0,1-.6-1A1.26593,1.26593,0,0,1,3.1,3.8a14.776,14.776,0,0,1,3.7.9,28.25773,28.25773,0,0,0,3.7.8V8.6L9,9.9V10l1.5,1.3v4.3a4.6179,4.6179,0,0,1-2.5.6,4.92913,4.92913,0,0,1-3.9-1.6l4.1-2v-7l-5,2.2A6.68515,6.68515,0,0,1,5.8,4.9l-.1-.2A7.47133,7.47133,0,0,0,0,11.6a7.01948,7.01948,0,0,0,7,7,6.50532,6.50532,0,0,0,6.6-6.5h-.2a6.69748,6.69748,0,0,1-2.6,3.1V11.1l1.6-1.3V9.7L10.9,8.4v-3A2.85791,2.85791,0,0,0,13.9,2.5Zm-8.7,11L4,14.1a5.93247,5.93247,0,0,1-1.1-3.8,7.10647,7.10647,0,0,1,.3-2.1l2.1-.9Z"
                    />
                  </svg>`,
    description:
      "Breaking news, multimedia, reviews & opinion on Washington, business, sports, movies, travel, books, jobs, education, real estate, cars & more.",
    url: "https://www.nytimes.com",
    feeds: [
      {
        title: "Regions",
        type: "feedGroup",
        feeds: [
          {
            title: "World",
            url: "https://rss.nytimes.com/services/xml/rss/nyt/World.xml",
          },
          {
            title: "Africa",
            url: "https://rss.nytimes.com/services/xml/rss/nyt/Africa.xml",
          },
          {
            title: "Americas",
            url: "https://rss.nytimes.com/services/xml/rss/nyt/Americas.xml",
          },
          {
            title: "Asia Pacific",
            url: "https://rss.nytimes.com/services/xml/rss/nyt/AsiaPacific.xml",
          },
          {
            title: "Europe",
            url: "https://rss.nytimes.com/services/xml/rss/nyt/Europe.xml",
          },
          {
            title: "Middle East",
            url: "https://rss.nytimes.com/services/xml/rss/nyt/MiddleEast.xml",
          },
        ],
      },
      {
        title: "U.S.",
        type: "feedGroup",
        feeds: [
          {
            title: "U.S.",
            url: "https://rss.nytimes.com/services/xml/rss/nyt/US.xml",
          },
          {
            title: "Education",
            url: "https://rss.nytimes.com/services/xml/rss/nyt/Education.xml",
          },
          {
            title: "Politics",
            url: "https://rss.nytimes.com/services/xml/rss/nyt/Politics.xml",
          },
          {
            title: "N.Y. / Region",
            url: "https://rss.nytimes.com/services/xml/rss/nyt/NYRegion.xml",
          },
        ],
      },
      {
        title: "Business",
        type: "feedGroup",
        feeds: [
          {
            title: "Business",
            url: "https://rss.nytimes.com/services/xml/rss/nyt/Business.xml",
          },
          {
            title: "Energy and Environment",
            url: "https://rss.nytimes.com/services/xml/rss/nyt/EnergyEnvironment.xml",
          },
          {
            title: "Small Business",
            url: "https://rss.nytimes.com/services/xml/rss/nyt/SmallBusiness.xml",
          },
          {
            title: "Economy",
            url: "https://rss.nytimes.com/services/xml/rss/nyt/Economy.xml",
          },
          {
            title: "Media and Advertising",
            url: "https://rss.nytimes.com/services/xml/rss/nyt/MediaandAdvertising.xml",
          },
          {
            title: "Your Money",
            url: "https://rss.nytimes.com/services/xml/rss/nyt/YourMoney.xml",
          },
        ],
      },
      {
        title: "Technology",
        type: "feedGroup",
        feeds: [
          {
            title: "Technology",
            url: "https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml",
          },
          {
            title: "Personal Tech",
            url: "https://rss.nytimes.com/services/xml/rss/nyt/PersonalTech.xml",
          },
        ],
      },
      {
        title: "Sports",
        type: "feedGroup",
        feeds: [
          {
            title: "Sports",
            url: "https://rss.nytimes.com/services/xml/rss/nyt/Sports.xml",
          },
          {
            title: "Baseball",
            url: "https://rss.nytimes.com/services/xml/rss/nyt/Baseball.xml",
          },
          {
            title: "College Basketball",
            url: "https://rss.nytimes.com/services/xml/rss/nyt/CollegeBasketball.xml",
          },
          {
            title: "College Football",
            url: "https://rss.nytimes.com/services/xml/rss/nyt/CollegeFootball.xml",
          },
          {
            title: "Golf",
            url: "https://rss.nytimes.com/services/xml/rss/nyt/Golf.xml",
          },
          {
            title: "Hockey",
            url: "https://rss.nytimes.com/services/xml/rss/nyt/Hockey.xml",
          },
          {
            title: "Pro Basketball",
            url: "https://rss.nytimes.com/services/xml/rss/nyt/ProBasketball.xml",
          },
          {
            title: "Pro Football",
            url: "https://rss.nytimes.com/services/xml/rss/nyt/ProFootball.xml",
          },
          {
            title: "Soccer",
            url: "https://rss.nytimes.com/services/xml/rss/nyt/Soccer.xml",
          },
          {
            title: "Tennis",
            url: "https://rss.nytimes.com/services/xml/rss/nyt/Tennis.xml",
          },
        ],
      },
      {
        title: "Science",
        type: "feedGroup",
        feeds: [
          {
            title: "Science",
            url: "https://rss.nytimes.com/services/xml/rss/nyt/Science.xml",
          },
          {
            title: "Environment",
            url: "https://rss.nytimes.com/services/xml/rss/nyt/Environment.xml",
          },
          {
            title: "Space and Cosmos",
            url: "https://rss.nytimes.com/services/xml/rss/nyt/Space.xml",
          },
        ],
      },
      {
        title: "Health",
        type: "feedGroup",
        feeds: [
          {
            title: "Health",
            url: "https://rss.nytimes.com/services/xml/rss/nyt/Health.xml",
          },
          {
            title: "Well Blog",
            url: "https://rss.nytimes.com/services/xml/rss/nyt/Well.xml",
          },
        ],
      },
      {
        title: "Arts and Culture",
        type: "feedGroup",
        feeds: [
          {
            title: "Arts",
            url: "https://rss.nytimes.com/services/xml/rss/nyt/Arts.xml",
          },
          {
            title: "Art & Design",
            url: "https://rss.nytimes.com/services/xml/rss/nyt/ArtandDesign.xml",
          },
          {
            title: "Book Review",
            url: "https://rss.nytimes.com/services/xml/rss/nyt/Books/Review.xml",
          },
          {
            title: "Dance",
            url: "https://rss.nytimes.com/services/xml/rss/nyt/Dance.xml",
          },
          {
            title: "Movies",
            url: "https://rss.nytimes.com/services/xml/rss/nyt/Movies.xml",
          },
          {
            title: "Music",
            url: "https://rss.nytimes.com/services/xml/rss/nyt/Music.xml",
          },
          {
            title: "Television",
            url: "https://rss.nytimes.com/services/xml/rss/nyt/Television.xml",
          },
          {
            title: "Theater",
            url: "https://rss.nytimes.com/services/xml/rss/nyt/Theater.xml",
          },
        ],
      },
    ],
  },
  {
    title: "Ars Technica",
    icon: `
<svg id="Ars_Logo" data-name="Ars Logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <defs>
    <style>
      .cls-1 {
        stroke-width: 0px;
      }
    </style>
  </defs>
  <path fill="currentColor" class="cls-1" d="M16,0C7.1635,0,0,7.1635,0,16s7.1635,16,16,16,16-7.1635,16-16S24.8365,0,16,0ZM11.7894,20.8753h-1.4625l-.1995-1.3075c-.8847.9723-2.1425,1.5206-3.4571,1.5069-1.7729,0-2.8809-1.0637-2.8809-2.7258,0-2.4377,2.0831-3.4127,6.1828-3.8338v-.4211c0-1.241-.7313-1.662-1.8615-1.662s-2.3269.3767-3.3906.8421l-.2438-1.5734c1.1745-.4654,2.2825-.8199,3.7895-.8199,2.3712,0,3.5236.9529,3.5236,3.1468v6.8477ZM16.0443,15.0915v5.7838h-1.8172v-9.7728h1.4626l.3103,1.9945c.687-1.108,1.8172-2.1053,3.4349-2.1939l.2881,1.7507c-1.6399.0665-3.0138,1.1523-3.6787,2.4377ZM24.3104,21.0749h-.0001c-1.2454-.0291-2.467-.3478-3.5679-.9309l.2659-1.7285c1.0111.7186,2.2168,1.1127,3.4571,1.1302,1.241,0,1.9945-.4654,1.9945-1.2853s-.554-1.241-2.3269-1.662c-2.3047-.5762-3.2133-1.2632-3.2133-3.0138s1.3075-2.7036,3.4571-2.7036c1.1058-.0054,2.2004.2211,3.2133.6648l-.2881,1.7285c-.9039-.5246-1.9248-.8141-2.9695-.8421-1.108,0-1.6842.4211-1.6842,1.1302s.4875,1.0194,2.0388,1.4183c2.4155.6205,3.5014,1.3075,3.5014,3.169s-1.3517,2.9252-3.8781,2.9252Z"/>
  <path fill="currentColor" class="cls-1" d="M5.6066,18.2604c0,1.0194.5319,1.3075,1.4626,1.3075s2.0831-.5319,2.903-1.374v-2.2825c-3.6122.3546-4.3656,1.3297-4.3656,2.349Z"/>
</svg>
    `,
    url: "https://arstechnica.com",
    feeds: [
      {
        title: "Main Feeds",
        type: "feedGroup",
        feeds: [
          {
            title: "All News",
            url: "https://feeds.arstechnica.com/arstechnica/index",
          },
          {
            title: "Ars Features",
            url: "https://feeds.arstechnica.com/arstechnica/features",
          },
        ],
      },
      {
        title: "Sections",
        type: "feedGroup",
        feeds: [
          {
            title: "Technology Lab",
            url: "https://feeds.arstechnica.com/arstechnica/technology-lab",
          },
          {
            title: "Gear and Gadgets",
            url: "https://feeds.arstechnica.com/arstechnica/gadgets",
          },
          {
            title: "Law and Disorder",
            url: "https://feeds.arstechnica.com/arstechnica/tech-policy",
          },
          {
            title: "Infinite Loop",
            url: "https://feeds.arstechnica.com/arstechnica/apple",
          },
          {
            title: "Opposable Thumbs",
            url: "https://feeds.arstechnica.com/arstechnica/gaming",
          },
          {
            title: "The Scientific Method",
            url: "https://feeds.arstechnica.com/arstechnica/science",
          },
          {
            title: "Cars Technica",
            url: "https://feeds.arstechnica.com/arstechnica/cars",
          },
          {
            title: "Staff Blogs",
            url: "https://feeds.arstechnica.com/arstechnica/staff-blogs",
          },
          {
            title: "Ars Cardboard",
            url: "https://feeds.arstechnica.com/arstechnica/cardboard",
          },
        ],
      },
    ],
  },
  {
    title: "Wall Street Journal",
    url: "https://www.wsj.com",
    icon: `<svg version="1.1" width="16" height="16" id="WSJ" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 102 59" style="enable-background:new 0 0 102 59;" xml:space="preserve">
 <style type="text/css">
  .st0{fill-rule:evenodd;clip-rule:evenodd;}
 </style>
 <g>
  <g transform="translate(-140.000000, -761.000000)">
   <g transform="translate(120.000000, 715.000000)">
    <g transform="translate(20.000000, 46.000000)">
     <path id="WSJ" class="st0" fill="currentColor" d="M24.7,10.5c-1.6-7.6-2.1-7.9-5.7-8.1V1.1h16.1v1.3c-4.4,0.4-4.5,0.4-2.9,9.3l5.3,28.1l6.3-30.2
					c1.3-6.2,0.8-6.8-3.3-7.1l-1.3-0.1V1.1h11.5v1.3c-3.5,0.3-3.5,1.2-4.9,7.8L35.5,59h-1l-8.8-43.7L16.4,59h-1L4.9,7.8
					C4,3.3,3.8,2.6,0,2.4V1.1h15.7v1.3c-4,0.4-4.1,0.8-2.5,9.3l5.4,27.9L24.7,10.5L24.7,10.5z M66.6,58.7c-5.7,0-9.1-5.3-10.4-5.3
					c-1.4,0-3,3-3.5,4.3h-1.2V38.9h1.2c3.5,10.3,9.1,18.4,13.7,18.4c2.7,0,4.4-2.5,4.4-6.2c0-13.6-19-22.4-19-39.1
					c0-6.8,4.8-12.1,10-12.1c4.7,0,7.3,3.8,8.8,3.8c0.8,0,1.4-0.6,2.4-3h0.9v16.8h-1.2C70.5,9.4,66,1.2,61.6,1.2
					c-2.7,0-4.7,2.5-4.7,6.2c0,13.1,19,21.4,19,38.7C76,53.3,71.6,58.7,66.6,58.7z M86.3,58.7c-5.8,0-8.1-3.6-8.1-7.1
					c0-3.5,2.1-7.1,5.3-7.1c3.4,0,4.8,3.4,3.2,5.8c-1.3,2.1-4.8,2.3-4.8,3.9c0,2.5,2.1,3.1,3.8,3.1c5,0,4.7-3.1,4.7-13.7V6.1
					c0-3-0.7-3.7-3.9-3.7h-1.2V1.1H102v1.3h-1.4c-1.7,0-2.4,0.7-2.4,3.8v36.7C98.2,53.2,90.8,58.7,86.3,58.7z">
     </path>
    </g>
   </g>
  </g>
 </g>
</svg>`,
    feeds: [
      {
        title: "Opinion",
        url: "https://feeds.a.dj.com/rss/RSSOpinion.xml",
      },
      {
        title: "World News",
        url: "https://feeds.a.dj.com/rss/WSJcomUSBusiness.xml",
      },
      {
        title: "US Business",
        url: "https://feeds.a.dj.com/rss/RSSWSJD.xml",
      },
      {
        title: "Markets",
        url: "https://feeds.a.dj.com/rss/RSSMarketsMain.xml",
      },
      {
        title: "Technology",
        url: "https://feeds.a.dj.com/rss/RSSWSJD.xml",
      },
      {
        title: "Lifestyle",
        url: "https://feeds.a.dj.com/rss/RSSLifestyle.xml",
      },
    ],
  },
  {
    title: "The Verge",
    url: "https://www.theverge.com",
    icon: "",
    feeds: [
      {
        title: "Android",
        url: "http://www.theverge.com/android/rss/index.xml",
      },
      {
        title: "Apple",
        url: "http://www.theverge.com/apple/rss/index.xml",
      },
      {
        title: "Climate",
        url: "https://www.theverge.com/rss/climate-change/index.xml",
      },
      {
        title: "Crypto",
        url: "https://www.theverge.com/rss/cryptocurrency/index.xml",
      },
      {
        title: "Creators",
        url: "https://www.theverge.com/rss/creators/index.xml",
      },
      {
        title: "Cybersecurity",
        url: "https://www.theverge.com/rss/cyber-security/index.xml",
      },
      {
        title: "Deals",
        url: "https://www.theverge.com/rss/good-deals/index.xml",
      },
      {
        title: "Decoder",
        url: "https://www.theverge.com/rss/decoder-podcast-with-nilay-patel/index.xml",
      },
      {
        title: "Elon Musk",
        url: "https://www.theverge.com/rss/elon-musk/index.xml",
      },
      {
        title: "Facebook",
        url: "https://www.theverge.com/rss/facebook/index.xml",
      },
      {
        title: "Film",
        url: "https://www.theverge.com/rss/film/index.xml",
      },
      {
        title: "Gadgets",
        url: "https://www.theverge.com/rss/gadgets/index.xml",
      },
      {
        title: "Gaming",
        url: "https://www.theverge.com/rss/games/index.xml",
      },
      {
        title: "Google",
        url: "https://www.theverge.com/rss/google/index.xml",
      },
      {
        title: "How-to",
        url: "https://www.theverge.com/rss/how-to/index.xml",
      },
      {
        title: "Meta",
        url: "https://www.theverge.com/rss/meta/index.xml",
      },
      {
        title: "How-to",
        url: "https://www.theverge.com/rss/how-to/index.xml",
      },
      {
        title: "Microsoft",
        url: "http://www.theverge.com/microsoft/rss/index.xml",
      },
      {
        title: "Policy",
        url: "http://www.theverge.com/policy/rss/index.xml",
      },
      {
        title: "Reviews",
        url: "https://www.theverge.com/rss/reviews/index.xml",
      },
      {
        title: "Samsung",
        url: "https://www.theverge.com/rss/samsung/index.xml",
      },
      {
        title: "Science",
        url: "https://www.theverge.com/rss/science/index.xml",
      },
      {
        title: "Space",
        url: "https://www.theverge.com/rss/space/index.xml",
      },
      {
        title: "Streaming",
        url: "https://www.theverge.com/rss/streaming-wars/index.xml",
      },
      {
        title: "Tesla",
        url: "https://www.theverge.com/rss/tesla/index.xml",
      },
      {
        title: "TikTok",
        url: "https://www.theverge.com/rss/tiktok/index.xml",
      },
      {
        title: "Transportation",
        url: "https://www.theverge.com/rss/transportation/index.xml",
      },
      {
        title: "TV Shows",
        url: "https://www.theverge.com/rss/tv/index.xml",
      },
      {
        title: "Twitter",
        url: "https://www.theverge.com/rss/twitter/index.xml",
      },
      {
        title: "YouTube",
        url: "https://www.theverge.com/rss/youtube/index.xml",
      },
    ],
  },
];

export interface FeedSource {
  feeds: (Feed | FeedGroup)[];
  title: string;
  icon: string;
  description?: string;
  url: string;
}
export interface FeedGroup {
  title: string;
  type: "feedGroup";
  feeds: Feed[];
}
export interface Feed {
  title: string;
  type?: "feed";
  url: string;
}
