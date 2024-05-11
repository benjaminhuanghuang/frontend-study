document.querySelector(".file-input").addEventListener("change", function () {
  let allowed_mime_types = [];
  //allowed max size in MB
  let allowed_size_mb = 100;

  var files_input = document.querySelector(".file-input").files;
  //user has not choosen any file
  if (files_input.length == 0) {
    alert("Error : No file selected");
    return;
  }

  for (i = 0; i < files_input.length; i++) {
    let file = files_input[i];

    //validate file size
    if (file.size > allowed_size_mb * 1024 * 1024) {
      alert("Error : Exceed size = " + file.name);
      return;
    }

    //console. log('you have choosen the file ' + file. name);
    let uniq = "id-" + btoa(file.name).replace(/=/g, "").substring(0, 7);
    let filetype = file.type.match(/([^\/]+)\//);
    let li = `
        <li class="file-list ${filetype[1]}" id="${uniq}" data-filename="${file.name}">
            <div class="thumbnail">
                <ion-icon name="document-outline"></ion-icon>
                <ion-icon name="image-outline"></ion-icon>
                <ion-icon name="musical-notes-outline"></ion-icon>
                <ion-icon name="videocam-outline"></ion-icon>
                <span class="completed">
                    <ion-icon name="checkmark"></ion-icon>
                </span>
            </div>
            <div class="properties">
                <span class="title"><strong>File name image.wav</strong></span>
                <span class="size"></span>
                <span class="progress">
                    <span class="buffer"></span>
                    <span class="percentage">0%</span>
                </span>
            </div>
            <button class="remove">
                <ion-icon name="close"></ion-icon>
            </button>
        </li>`;
    document.querySelector("list-upload ul").innerHTML =
      li + document.querySelector("list-upload ul").innerHTML;
    let li_el = document.getElementById("#" + uniq);
    let name = li_el.querySelector(".title");
    let size = li_el.querySelector(".size");
    name.innerHTML = file.name;
    size.innerHTML = byteToSize(file.size);

    // upload file
    var data = new FormData();
    // file selected by the user.  In case of multiple files append each element to form data
    data.append("file", file);

    var request = new XMLHttpRequest();
    request.open("POST", "upload.php");

    // upload progress event
    request.upload.addEventListener("progress", function (e) {
      let li_el = document.querySelector("#" + uniq);
      let percent = Math.ceil((e.loaded / e.total) * 100);
      li_el.querySelector(".buffer").style.width = percent + "%";
      li_el.querySelector(".percentage").innerHTML = percent + "%";
      li_el.querySelector(".percentage").style.left = percent + "%";
      if (e.loaded == e.total) {
        li_el.querySelector("completed").style.display = li_el.querySelector(
          "remove"
        ).style.display = "flex";
        li_el.querySelector(".remove").addEventListener("click", function () {
          var data = FormData();
          data.append("removeFile", file.name);
          var xhr = new XMLHttpRequest();
          xhr.open("POST", "upload.php", true);
          xhr.onload = function () {
            // do something to response
            if (this.status == 200) {
              li_el.remove();
            }
          };
          xhr.send(data);
        });
      }
    });
    // Ajax request finished event
    request.addEventListener("load", function (e) {
      console.log(request.response);
    });

    // send POST request to server side script
    request.send(data);
  }
});


function bytesToSize(bytes) {
    const units = ["byte", "kilobyte", "megabyte", "terabyte", "petabyte"];
    const unit  = Math.floor(Math.log(bytes)/ Math.log(1024))
    return new Intl.NumberFormat("en", {style: "unit", unit: units[unit]}).format(bytes / 1024 ** unit);
}
