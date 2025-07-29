export const fetchData = () => {
    let data;
    let promise = fetch("https://dummyjson.com/users/1")
      .then((response) => response.json())
      .then((json) => (data = json));
    return {
      read() {
        console.log('userDetails',data)
        if (!data) {
          throw promise; 
        }

        return data;
      },
    };
  };
