interface Name {
    title: string;
    first: string;
    last: string;
  }
  
  interface Street {
    number: number;
    name: string;
  }
  
  interface Location {
    street: Street;
    city: string;
    state: string;
    country: string;
    postcode: string;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  }
  
  interface Login {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  }
  
  interface Dob {
    date: string;
    age: number;
  }
  
  interface Registered {
    date: string;
    age: number;
  }
  
  interface ID {
    name: string;
    value: string;
  }
  
  interface Picture {
    large: string;
    medium: string;
    thumbnail: string;
  }
  
  interface Result {
    gender: string;
    name: Name;
    location: Location;
    email: string;
    login: Login;
    dob: Dob;
    registered: Registered;
    phone: string;
    cell: string;
    id: ID;
    picture: Picture;
    nat: string;
  }
  
  export default interface RandomUserResponse {
    results: Result[];
    info: {
      seed: string;
      results: number;
      page: number;
      version: string;
    };
  }
  