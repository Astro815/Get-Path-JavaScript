let xhtp = new XMLHttpRequest();
xhtp.onload = (result) => {
    console.log(result.target.response);
};

xhtp.open("GET", "./test");
xhtp.send();