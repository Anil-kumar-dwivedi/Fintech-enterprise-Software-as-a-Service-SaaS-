// very important function to call all the servlet 
// with different different url for different functionalities

import axios from "axios";

export const fetchData = async (url) => {
    let res = null, data = null;
    
    await axios.get(url)
    .then(function(response){
        data = response.data;
    });
    return data;
    }

    export const Urls = {
    fetch : "http://localhost:8080/HRC/FetchServlet",
    delete : "http://localhost:8080/HRC/DeleteServlet?",
    edit: "http://localhost:8080/HRC/EditServlet?",
    add : "http://localhost:8080/HRC/AddServlet?",
    search : "http://localhost:8080/HRC/SimpleSearch?cust_number=",
    advanceSearch : "http://localhost:8080/HRC/AdvanceSearchServlet?"
}