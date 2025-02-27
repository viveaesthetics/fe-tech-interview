interface User {
    address: {
      geolocation: {
        lat: string;
        long: string;
      };
      city: string;
      street: string;
      number: number;
      zipcode: string;
    };
    id: number;
    email: string;
    username: string;
    password: string;
    name: {
      firstname: string;
      lastname: string;
    };
    phone: string;
    __v: number;
  }
  

export async function getUsers() {
    const response = await fetch("https://fakestoreapi.com/users")
    const data = await response.json()

    return data satisfies User
}

export async function login(userName:string, password:string) {
    // TBI
}