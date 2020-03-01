import { Injectable } from '@angular/core';

export interface Movie {
  number: number;
  title: string;
  year: string;
  makers: string[];
  watched: boolean;
  skipping: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class MovieListService {

  constructor() { }

  getMovieList(): Movie[] {
    return [
      {
        number: 1,
        title: 'Citizen Kane',
        year: '1941',
        makers: [
          'RKO Pictures'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 2,
        title: 'The Godfather',
        year: '1972',
        makers: [
          'Paramount Pictures'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 3,
        title: 'Casablanca (film)',
        year: '1942',
        makers: [
          'Warner Bros.'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 4,
        title: 'Raging Bull',
        year: '1980',
        makers: [
          'United Artists'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 5,
        title: 'Singin\' in the Rain',
        year: '1952',
        makers: [
          'Metro-Goldwyn-Mayer'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 6,
        title: 'Gone with the Wind (film)',
        year: '1939',
        makers: [
          'Metro-Goldwyn-Mayer',
          'Selznick International Pictures'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 7,
        title: 'Lawrence of Arabia (film)',
        year: '1962',
        makers: [
          'Horizon Pictures',
          'Columbia Pictures'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 8,
        title: 'Schindler\'s List',
        year: '1993',
        makers: [
          'Universal Studios'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 9,
        title: 'Vertigo (film)',
        year: '1958',
        makers: [
          'Paramount Pictures'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 10,
        title: 'The Wizard of Oz (1939 film)',
        year: '1939',
        makers: [
          'Metro-Goldwyn-Mayer'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 11,
        title: 'City Lights',
        year: '1931',
        makers: [
          'United Artists'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 12,
        title: 'The Searchers',
        year: '1956',
        makers: [
          'Warner Bros.'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 13,
        title: 'Star Wars (film)',
        year: '1977',
        makers: [
          '20th Century Fox',
          'Lucasfilm'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 14,
        title: 'Psycho (1960 film)',
        year: '1960',
        makers: [
          'Shamley Productions',
          'Paramount Pictures'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 15,
        title: '2001: A Space Odyssey (film)',
        year: '1968',
        makers: [
          'Metro-Goldwyn-Mayer'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 16,
        title: 'Sunset Boulevard (film)',
        year: '1950',
        makers: [
          'Paramount Pictures'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 17,
        title: 'The Graduate',
        year: '1967',
        makers: [
          'United Artists',
          'Embassy Pictures'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 18,
        title: 'The General (1926 film)',
        year: '1926',
        makers: [
          'United Artists'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 19,
        title: 'On the Waterfront',
        year: '1954',
        makers: [
          'Columbia Pictures'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 20,
        title: 'It\'s a Wonderful Life',
        year: '1946',
        makers: [
          'RKO Pictures'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 21,
        title: 'Chinatown (1974 film)',
        year: '1974',
        makers: [
          'Paramount Pictures'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 22,
        title: 'Some Like It Hot',
        year: '1959',
        makers: [
          'United Artists'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 23,
        title: 'The Grapes of Wrath (film)',
        year: '1940',
        makers: [
          '20th Century Fox'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 24,
        title: 'E.T. the Extra-Terrestrial',
        year: '1982',
        makers: [
          'Universal Studios'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 25,
        title: 'To Kill a Mockingbird (film)',
        year: '1962',
        makers: [
          'Universal Studios#Universal-International'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 26,
        title: 'Mr. Smith Goes to Washington',
        year: '1939',
        makers: [
          'Columbia Pictures'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 27,
        title: 'High Noon',
        year: '1952',
        makers: [
          'United Artists'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 28,
        title: 'All About Eve',
        year: '1950',
        makers: [
          '20th Century Fox'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 29,
        title: 'Double Indemnity (film)',
        year: '1944',
        makers: [
          'Paramount Pictures'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 30,
        title: 'Apocalypse Now',
        year: '1979',
        makers: [
          'United Artists'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 31,
        title: 'The Maltese Falcon (1941 film)',
        year: '1941',
        makers: [
          'Warner Bros.'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 32,
        title: 'The Godfather Part II',
        year: '1974',
        makers: [
          'Paramount Pictures'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 33,
        title: 'One Flew Over the Cuckoo\'s Nest (film)',
        year: '1975',
        makers: [
          'United Artists'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 34,
        title: 'Snow White and the Seven Dwarfs (1937 film)',
        year: '1937',
        makers: [
          'RKO Pictures',
          'Walt Disney Pictures'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 35,
        title: 'Annie Hall',
        year: '1977',
        makers: [
          'United Artists'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 36,
        title: 'The Bridge on the River Kwai',
        year: '1957',
        makers: [
          'Columbia Pictures'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 37,
        title: 'The Best Years of Our Lives',
        year: '1946',
        makers: [
          'RKO Pictures',
          'Samuel Goldwyn'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 38,
        title: 'The Treasure of the Sierra Madre (film)',
        year: '1948',
        makers: [
          'Warner Bros.'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 39,
        title: 'Dr. Strangelove',
        year: '1964',
        makers: [
          'Columbia Pictures'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 40,
        title: 'The Sound of Music (film)',
        year: '1965',
        makers: [
          '20th Century Fox'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 41,
        title: 'King Kong (1933 film)',
        year: '1933',
        makers: [
          'RKO Pictures'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 42,
        title: 'Bonnie and Clyde (film)',
        year: '1967',
        makers: [
          'Warner Bros.'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 43,
        title: 'Midnight Cowboy',
        year: '1969',
        makers: [
          'United Artists'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 44,
        title: 'The Philadelphia Story (film)',
        year: '1940',
        makers: [
          'Metro-Goldwyn-Mayer'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 45,
        title: 'Shane (film)',
        year: '1953',
        makers: [
          'Paramount Pictures'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 46,
        title: 'It Happened One Night',
        year: '1934',
        makers: [
          'Columbia Pictures'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 47,
        title: 'A Streetcar Named Desire (1951 film)',
        year: '1951',
        makers: [
          'Warner Bros.'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 48,
        title: 'Rear Window',
        year: '1954',
        makers: [
          'Paramount Pictures'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 49,
        title: 'Intolerance (film)',
        year: '1916',
        makers: [
          'Triangle Film Corporation'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 50,
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        year: '2001',
        makers: [
          'New Line Cinema'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 51,
        title: 'West Side Story (1961 film)',
        year: '1961',
        makers: [
          'United Artists'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 52,
        title: 'Taxi Driver',
        year: '1976',
        makers: [
          'Columbia Pictures'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 53,
        title: 'The Deer Hunter',
        year: '1978',
        makers: [
          'Universal Studios'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 54,
        title: 'MASH (film)',
        year: '1970',
        makers: [
          '20th Century Fox'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 55,
        title: 'North by Northwest',
        year: '1959',
        makers: [
          'Metro-Goldwyn-Mayer'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 56,
        title: 'Jaws (film)',
        year: '1975',
        makers: [
          'Universal Studios'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 57,
        title: 'Rocky',
        year: '1976',
        makers: [
          'United Artists'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 58,
        title: 'The Gold Rush',
        year: '1925',
        makers: [
          'United Artists'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 59,
        title: 'Nashville (film)',
        year: '1975',
        makers: [
          'Paramount Pictures',
          'ABC Entertainment'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 60,
        title: 'Duck Soup (1933 film)',
        year: '1933',
        makers: [
          'Paramount Pictures'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 61,
        title: 'Sullivan\'s Travels',
        year: '1941',
        makers: [
          'Paramount Pictures'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 62,
        title: 'American Graffiti',
        year: '1973',
        makers: [
          'Universal Studios',
          'Lucasfilm'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 63,
        title: 'Cabaret (1972 film)',
        year: '1972',
        makers: [
          'Monogram Pictures#Allied Artists'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 64,
        title: 'Network (1976 film)',
        year: '1976',
        makers: [
          'Metro-Goldwyn-Mayer',
          'United Artists'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 65,
        title: 'The African Queen (film)',
        year: '1951',
        makers: [
          'United Artists'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 66,
        title: 'Raiders of the Lost Ark',
        year: '1981',
        makers: [
          'Paramount Pictures',
          'Lucasfilm'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 67,
        title: 'Who\'s Afraid of Virginia Woolf? (film)',
        year: '1966',
        makers: [
          'Warner Bros.'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 68,
        title: 'Unforgiven',
        year: '1992',
        makers: [
          'Warner Bros.'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 69,
        title: 'Tootsie',
        year: '1982',
        makers: [
          'Columbia Pictures'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 70,
        title: 'A Clockwork Orange (film)',
        year: '1971',
        makers: [
          'Warner Bros.'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 71,
        title: 'Saving Private Ryan',
        year: '1998',
        makers: [
          'DreamWorks Pictures'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 72,
        title: 'The Shawshank Redemption',
        year: '1994',
        makers: [
          'Warner Bros.'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 73,
        title: 'Butch Cassidy and the Sundance Kid',
        year: '1969',
        makers: [
          '20th Century Fox'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 74,
        title: 'The Silence of the Lambs (film)',
        year: '1991',
        makers: [
          'Orion Pictures'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 75,
        title: 'In the Heat of the Night (film)',
        year: '1967',
        makers: [
          'United Artists'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 76,
        title: 'Forrest Gump',
        year: '1994',
        makers: [
          'Paramount Pictures'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 77,
        title: 'All the President\'s Men (film)',
        year: '1976',
        makers: [
          'Warner Bros.'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 78,
        title: 'Modern Times (film)',
        year: '1936',
        makers: [
          'United Artists'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 79,
        title: 'The Wild Bunch',
        year: '1969',
        makers: [
          'Warner Bros.-Seven Arts'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 80,
        title: 'The Apartment',
        year: '1960',
        makers: [
          'United Artists'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 81,
        title: 'Spartacus (film)',
        year: '1960',
        makers: [
          'Universal Studios#Universal-International'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 82,
        title: 'Sunrise: A Song of Two Humans',
        year: '1927',
        makers: [
          '20th Century Fox'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 83,
        title: 'Titanic (1997 film)',
        year: '1997',
        makers: [
          'Paramount Pictures',
          '20th Century Fox'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 84,
        title: 'Easy Rider',
        year: '1969',
        makers: [
          'Columbia Pictures'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 85,
        title: 'A Night at the Opera (film)',
        year: '1935',
        makers: [
          'Metro-Goldwyn-Mayer'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 86,
        title: 'Platoon (film)',
        year: '1986',
        makers: [
          'Orion Pictures'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 87,
        title: '12 Angry Men (1957 film)',
        year: '1957',
        makers: [
          'United Artists'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 88,
        title: 'Bringing Up Baby',
        year: '1938',
        makers: [
          'RKO Pictures'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 89,
        title: 'The Sixth Sense',
        year: '1999',
        makers: [
          'Hollywood Pictures',
          'Spyglass Entertainment',
          'The Kennedy/Marshall Company'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 90,
        title: 'Swing Time (film)',
        year: '1936',
        makers: [
          'RKO Pictures'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 91,
        title: 'Sophie\'s Choice (film)',
        year: '1982',
        makers: [
          'ITC Entertainment'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 92,
        title: 'Goodfellas',
        year: '1990',
        makers: [
          'Warner Bros.'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 93,
        title: 'The French Connection (film)',
        year: '1971',
        makers: [
          '20th Century Fox'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 94,
        title: 'Pulp Fiction',
        year: '1994',
        makers: [
          'Miramax Films'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 95,
        title: 'The Last Picture Show',
        year: '1971',
        makers: [
          'Columbia Pictures'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 96,
        title: 'Do the Right Thing',
        year: '1989',
        makers: [
          'Universal Studios',
          '40 Acres & A Mule Filmworks'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 97,
        title: 'Blade Runner',
        year: '1982',
        makers: [
          'Warner Bros.',
          'The Ladd Company'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 98,
        title: 'Yankee Doodle Dandy',
        year: '1942',
        makers: [
          'Warner Bros.'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 99,
        title: 'Toy Story',
        year: '1995',
        makers: [
          'Walt Disney Pictures',
          'Pixar'
        ],
        watched: false,
        skipping: false
      },
      {
        number: 100,
        title: 'Ben-Hur (1959 film)',
        year: '1959',
        makers: [
          'Metro-Goldwyn-Mayer'
        ],
        watched: false,
        skipping: false
      }
    ];
  }
}
