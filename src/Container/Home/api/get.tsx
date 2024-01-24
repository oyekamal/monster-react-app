const fetchData = async (url: string, setData) => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    // console.log(json);
    // console.log("--------------------------------");
    setData(json);
    // return json;
  } catch (error) {
    console.log("error", error);
    // return [];
  }
};

export default fetchData;
