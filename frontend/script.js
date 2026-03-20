async function uploadFile() {
    const file = document.getElementById("fileInput").files[0];

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData
    });

    const data = await res.json();
    alert(data.message);

    loadFiles();
}

async function loadFiles() {
    const res = await fetch("http://localhost:5000/files");
    const files = await res.json();

    const list = document.getElementById("fileList");
    list.innerHTML = "";

    files.forEach(file => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="http://localhost:5000/uploads/${file}" target="_blank">${file}</a>`;
        list.appendChild(li);
    });
}

loadFiles();