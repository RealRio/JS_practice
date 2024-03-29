const sendRequest = function (url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('get', url, false);
        xhr.setRequestHeader('Accept');
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4)
                return;
            if (xhr.status === 200 || xhr.status === 304)
                resolve(xhr.responseText);
            else
                reject(new Error(xhr.responseText));
        }
        xhr.send();
    })
}