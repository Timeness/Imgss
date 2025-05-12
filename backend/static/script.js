document.getElementById("uploadForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const fileInput = document.getElementById("imageFile");
  const file = fileInput.files[0];
  if (!file) return;

  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch("/upload", {
    method: "POST",
    body: formData,
  });

  const data = await res.json();
  const resultDiv = document.getElementById("result");
  if (data.url) {
    resultDiv.innerHTML = `<p class="mb-2">Image URL:</p><a href="${data.url}" target="_blank" class="text-blue-400 underline">${data.url}</a><br><img src="${data.url}" class="mt-4 max-w-xs"/>`;
  } else {
    resultDiv.textContent = "Upload failed.";
  }
});
