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
    icon: `<svg width="16" height="16" viewBox="0 0 99 91" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.779358 0L27.922 64.3341H44.4224L23.718 13.169H50.4799V0.101403L0.779358 0.00166234V0ZM81.2664 0.0997402L50.1774 78.8131L45.5494 90.5758H61.345L98.6711 0.101403H81.2664V0.0997402Z" fill="currentColor"/>
</svg>
`,
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
  {
    title: "The Economist",
    url: "https://economist.com",
    icon: `<svg width="16" height="16" id="The_Economist" data-name="The Economist" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.796 81.28">
  <defs>
    <style>
      .cls-1 {
        fill-rule: evenodd;
        stroke-width: 0px;
      }
    </style>
  </defs>
  <path fill="currentColor" class="cls-1" d="M122.815,1.092l.182,7.396-1.723.09c-.136-4.526-1.09-5.144-7.97-5.144h-1.472v25.91c0,3.579.91,4.527,4.435,4.626l.088,1.237c-3.337-.044-5.868-.044-7.474-.044-1.689,0-4.312,0-7.751.044l.088-1.237c3.534-.099,4.446-1.047,4.446-4.627V3.433h-1.721c-7.067,0-8.022.619-8.113,5.145l-1.713-.09.17-7.396c6.45.043,11.277.102,14.515.102,3.03,0,7.751-.059,14.013-.102M125.673,34.061c3.199,0,3.63-.619,3.678-5.101V7.348c-.048-4.491-.48-5.113-3.678-5.113l-.096-1.145c4.348-.234,5.344-.382,9.27-1.09v14.693c2.527-2.723,4.584-3.82,7.404-3.82,4.672,0,7.255,2.864,7.255,8.305v9.782c.048,4.482.478,5.101,3.67,5.101l.082,1.146c-2.747-.09-4.848-.19-6.233-.19-1.346,0-3.303.1-5.927.19l.1-1.146c2.524-.377,2.766-.847,2.813-5.101v-7.162c0-6.012-1.045-8.009-4.198-8.009-1.678,0-3.488,1.088-4.251,2.763-.287.574-.479,1.187-.671,1.808-.044.248-.044.43-.044.527v10.073c0,4.254.287,4.724,2.806,5.101l.103,1.146c-2.673-.09-4.64-.19-5.97-.19-1.385,0-3.489.1-6.209.19l.096-1.146M160.945,20.041c4.387-.098,5.722-.203,10.076-.674-.574-4.627-2.312-6.825-5.26-6.825-2.864,0-4.345,2.286-4.816,7.5M176.082,30.53c-2.964,3.678-5.87,5.21-9.609,5.21-6.628,0-11.115-4.87-11.115-11.99,0-7.672,4.63-12.879,11.31-12.879,3.59,0,6.173,1.331,7.938,4.153,1.191,2.009,1.521,3.387,1.566,6.827h-15.091c.2,7.158,2.817,11.258,7.18,11.258,2.57,0,4.764-1.195,7.108-3.91l.713,1.331M.155,79.313c3.874-.099,4.878-1.155,4.878-5.127v-24.84c0-3.967-1.004-5.022-4.878-5.132L.001,42.934l8.12.102,12.84-.162,3.38.06.21,7.68-2.118.16c-.365-4.808-1.264-5.337-8.798-5.337h-1.17l-.528.046v14.3c.996,0,1.804.056,2.282.056.8111.0587,1.6238.0914,2.437.098,4.142,0,5.097-.89,5.141-4.823h1.807c-.16,3.148-.16,4.778-.16,6.362,0,1.274,0,3.062.053,5.44h-1.7c-.208-3.793-1.06-4.538-5.034-4.585l-2.867-.06-2.012.107v11.07c0,4.502.263,4.71,4.716,4.71,5.891,0,7.643-1.324,8.164-6.367l2.12.113-1.219,8.787-4.076.057-12.879-.104-8.71.047.155-1.378M53.629,76.939c-3.017,3.122-5.417,4.34-8.906,4.34-6.983,0-11.458-5.449-11.458-13.66,0-8.57,4.726-13.937,12.356-13.937,2.01,0,4.042.37,7.177,1.22l.09,6.254-2.382.16c-.885-4.669-1.815-5.78-4.885-5.78-3.966,0-6.03,3.451-6.03,10.273,0,7.96,2.478,12.455,6.984,12.455,2.329,0,4.197-1.009,6.266-3.228l.788,1.903M65.767,67.928c.526,7.476,3.017,11.545,7.092,11.545,3.81,0,6.093-3.96,6.093-10.535,0-7.824-3.135-13.246-7.469-13.246-3.861,0-5.827,3.249-5.827,9.862,0,.795,0,1.586.111,2.375M59.285,68.516v-.803c0-8.932,4.812-14.03,12.994-14.03,7.59,0,12.987,5.63,12.987,13.82,0,8.219-5.243,13.777-13.146,13.777-7.542,0-12.568-5.08-12.835-12.764M91.52,79.425c3.453,0,3.978-.69,3.978-5.657v-12.19c0-4.824-.525-5.513-3.978-5.567l-.106-1.213c4.617-.266,5.684-.426,9.698-1.275l.271,4.687c3.017-3.309,5.345-4.528,8.485-4.528,5.143,0,8.048,3.338,8.048,9.227v10.86c-.048.416-.048.843-.048,1.267,0,3.385.897,4.389,4.13,4.389l.104,1.266c-3.07-.101-5.4-.21-6.937-.21-1.48,0-3.704.109-6.526.21l.093-1.266c2.729-.427,3.042-.95,3.042-5.657l.058-3.244v-4.714c0-6.657-1.22-8.79-4.571-8.79-2.07,0-3.816,1.06-4.874,2.978-.423.794-.79,2.055-.79,2.591v11.18c.052,4.707.318,5.23,3.121,5.656l.163,1.266c-2.966-.101-5.189-.21-6.671-.21-1.542,0-3.803.109-6.796.21l.106-1.266M133.128,67.928c.534,7.476,3.014,11.545,7.007,11.545,3.812,0,6.09-3.96,6.09-10.535,0-7.824-3.122-13.246-7.433-13.246-3.806,0-5.765,3.249-5.765,9.862,0,.795,0,1.586.1,2.375M126.563,68.516v-.803c0-8.932,4.824-14.03,12.997-14.03,7.676,0,13.068,5.63,13.068,13.82,0,8.219-5.239,13.777-13.227,13.777-7.49,0-12.57-5.08-12.838-12.764M158.551,79.425c3.555,0,4.085-.69,4.085-5.657v-12.19c0-4.824-.53-5.513-4.085-5.567l-.107-1.213c4.713-.266,5.783-.426,9.775-1.275l.237,4.687c2.979-3.254,5.313-4.528,8.435-4.528,3.6,0,5.712,1.484,7.214,4.94,3.235-3.62,5.612-4.94,8.846-4.94,4.996,0,7.793,3.388,7.793,9.227v10.86c0,.416-.053.843-.053,1.267,0,3.385.959,4.389,4.13,4.389l.115,1.266c-3.075-.101-5.403-.21-6.894-.21-1.435,0-3.614.109-6.521.21l.105-1.266c2.802-.427,3.069-.95,3.121-5.657v-7.958c0-6.554-1.152-8.79-4.445-8.79-1.957,0-3.972,1.19-4.819,2.978-.266.63-.526,1.27-.685,2.011-.054.262-.11.474-.11.58v11.18c0,4.707.318,5.23,3.121,5.656l.115,1.266c-2.807-.101-4.87-.21-6.271-.21-1.372,0-3.442.109-6.196.21l.111-1.266c2.805-.427,3.07-.95,3.115-5.657v-7.958c0-6.554-1.158-8.79-4.447-8.79-2.001,0-3.806,1.107-4.813,2.978-.426.843-.767,2.055-.767,2.591v11.18c.053,4.707.29,5.23,3.098,5.656l.106,1.266c-2.914-.101-5.052-.21-6.528-.21-1.543,0-3.814.109-6.888.21l.107-1.266M212.921,44.698c-.0066-1.9319,1.5541-3.5034,3.486-3.51.0053,0,.0107,0,.016,0,1.965,0,3.547,1.629,3.547,3.51,0,2.002-1.531,3.595-3.547,3.595-2.01,0-3.502-1.537-3.502-3.595M219.704,53.523v17.001l.05,3.244c0,4.966.485,5.655,4.078,5.655l.111,1.268c-3.288-.101-5.669-.209-7.307-.209-1.585,0-3.908.108-7.112.209l.1-1.268c3.496,0,3.995-.689,3.995-5.655l.049-3.244v-5.556l-.049-3.388c0-4.826-.5-5.515-3.995-5.568l-.1-1.215c4.784-.315,5.889-.478,10.18-1.274M230.318,79.744l-.208-5.404,2.695-.099c1.219,4.074,2.017,4.864,4.825,4.864,2.43,0,4.024-1.266,4.024-3.168,0-1.807-1.11-3.119-4.453-5.36-1.69-1.164-2.852-1.965-3.486-2.435-1.382-1.057-2.387-2.332-2.918-3.754-.324-.796-.479-1.744-.479-2.857,0-4.719,3.292-7.849,8.261-7.849,1.851,0,2.912.158,7.112,1.164l.115,5.256-2.691.11c-.6-3.458-1.675-4.676-4.16-4.676-2.383,0-4.081,1.378-4.081,3.243,0,1.849.853,2.96,3.604,4.706,2.484,1.645,4.387,3.12,5.68,4.285,1.485,1.426,2.336,3.224,2.336,5.225,0,4.677-3.93,8.284-8.97,8.284-1.955,0-3.809-.435-7.206-1.535M252.1,55.221c4.176-.32,5.756-2.113,6.954-7.622h2.38v7.145h6.676l-.746,2.909h-5.93v12.924c0,6.42.851,7.947,4.45,7.947.844,0,1.635-.104,2.912-.47v1.53c-1.797,1.007-4.285,1.586-6.823,1.586-2.343,0-4.513-1.318-5.423-3.28-.796-1.64-1.056-3.278-1.056-6.787v-13.45h-3.394v-2.432"/>
</svg>`,
    feeds: [
      {
        title: "Print Edition",
        type: "feedGroup",
        feeds: [
          {
            title: "The World This Week",
            url: "https://www.economist.com/the-world-this-week/rss.xml",
          },
          {
            title: "Letters",
            url: "https://www.economist.com/letters/rss.xml",
          },
          {
            title: "Leaders",
            url: "https://www.economist.com/leaders/rss.xml",
          },
          {
            title: "Briefings",
            url: "https://www.economist.com/briefing/rss.xml",
          },
          {
            title: "Special Reports",
            url: "https://www.economist.com/special-report/rss.xml",
          },
          {
            title: "Britain",
            url: "https://www.economist.com/britain/rss.xml",
          },
          {
            title: "Europe",
            url: "https://www.economist.com/europe/rss.xml",
          },
          {
            title: "United States",
            url: "https://www.economist.com/united-states/rss.xml",
          },
          {
            title: "The Americas",
            url: "https://www.economist.com/the-americas/rss.xml",
          },
          {
            title: "Middle East and Africa",
            url: "https://www.economist.com/middle-east-and-africa/rss.xml",
          },
          {
            title: "Asia",
            url: "https://www.economist.com/asia/rss.xml",
          },
          {
            title: "China",
            url: "https://www.economist.com/china/rss.xml",
          },
          {
            title: "International",
            url: "https://www.economist.com/international/rss.xml",
          },
          {
            title: "Business",
            url: "https://www.economist.com/business/rss.xml",
          },
          {
            title: "Finance and Economics",
            url: "https://www.economist.com/finance-and-economics/rss.xml",
          },
          {
            title: "Science and Technology",
            url: "https://www.economist.com/science-and-technology/rss.xml",
          },
          {
            title: "Books and Art",
            url: "https://www.economist.com/books-and-arts/rss.xml",
          },
          {
            title: "Obituaries",
            url: "https://www.economist.com/obituary/rss.xml",
          },
          {
            title: "Graphic Detail",
            url: "https://www.economist.com/graphic-detail/rss.xml",
          },
          {
            title: "Indicators",
            url: "https://www.economist.com/economic-and-financial-indicators/rss.xml",
          },
        ],
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
