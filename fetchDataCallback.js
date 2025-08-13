function fetchDataWithCallback(callback) {
    setTimeout(function() {
      let error = true; // Simulating an error condition
      if (error) {
        try {
        callback("Data fetched");
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
  }, 2000);
}
  
fetchDataWithCallback(function(result) {
  console.log(result);
});