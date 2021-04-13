const wrapper = document.querySelector(".wrapper");
const fileName = document.querySelector(".file-name");
const defaultBtn = document.querySelector("#default-btn");
const importBtn = document.querySelector("#import-btn");
const cancelBtn = document.querySelector("#cancel-btn");
const addBtn = document.querySelector("#add-btn");
const clearBtn = document.querySelector("#clear-btn");
const img = document.getElementById("img");
const back = document.getElementById('back')

function addBtnActive(){
  defaultBtn.click();
}
defaultBtn.addEventListener("change", function(){
  const file = this.files[0];
  if(file){
    img.style.display = 'block'
    const reader = new FileReader();
    reader.onload = function(){
      const result = reader.result;
      img.src = result;
      wrapper.classList.add("active");
    }
    reader.readAsDataURL(file);
  }
  if(this.value){
    let valueStore = this.value.match(regExp);
    fileName.textContent = valueStore;
  }
});

back.addEventListener('click',()=>{
    window.location.href = 'admin.html'
})
