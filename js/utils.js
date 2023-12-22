function downloadApkFromLink() {
    const apiUrl = 'https://firebasestorage.googleapis.com/v0/b/space-73.appspot.com/o/files%2Flzl3FD5FXIRiKLUKSMmcICXKSTk2%2FNotify.apk.txt';

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(jsonData => {
            var mediaToken = jsonData.downloadTokens;

            const apkUrl = apiUrl + "?alt=media&token=" + mediaToken;

            if (apkUrl) {
                const link = document.createElement('a');
                link.href = apkUrl;
                link.download = 'Notify.txt';
                link.target = "_blank";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                console.log("success")
            } else {
                console.error('APK URL not found in the JSON response.');
            }
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
}

function downloadApk() {
    const link = document.createElement('a');
    link.href = "../media/Notify.apk";
    link.download = 'Notify.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}