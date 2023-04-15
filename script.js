var run_pro = document.getElementById("run_pro");
run_pro.addEventListener("click", () => {
  input_wrap = document.getElementById("input_wrap").value;
  document.getElementById(
    "fram_wrapper"
  ).contentWindow.document.body.innerHTML = "";
  document
    .getElementById("fram_wrapper")
    .contentWindow.document.write(input_wrap);
});
