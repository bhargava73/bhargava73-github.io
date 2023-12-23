function getApkLink() {
    const apiUrl = 'https://firebasestorage.googleapis.com/v0/b/space-73.appspot.com/o/files%2Flzl3FD5FXIRiKLUKSMmcICXKSTk2%2FNotify.apk.txt';

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(jsonData => {
            const apkUrl = apiUrl + "?alt=media&token=" + jsonData.downloadTokens;
            console.log(apkUrl);
            downloadApkFromLink(apkUrl);
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
}

function downloadApkFromLink(apkUrl) {
    fetch(apkUrl, {
      //  mode: "no-cors",
    })
        .then(response => {
          console.log(response);
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.arrayBuffer();
        })
        .then(arrayBuffer => {
          const blob = new Blob([arrayBuffer], { type: 'application/vnd.android.package-archive' });
          const link = document.createElement('a');
          link.href = URL.createObjectURL(blob);
          link.download = 'Notify.apk';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        })
        .catch(error => {
          console.error('Error fetching APK file:', error);
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