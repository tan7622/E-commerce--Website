const wrapper = document.querySelector(".wrapper");
const fileName = document.querySelector(".file-name");
const defaultBtn = document.querySelector("#default-btn");
const addBtn = document.querySelector("#add-btn");
const clearBtn = document.querySelector("#clear-btn");
const img = document.querySelector("img");

function addBtnActive(){
  defaultBtn.click();
}
function clearBtnActive(){
    defaultBtn2.click();
  }

defaultBtn.addEventListener("change", function(){
  const file = this.files[0];
  if(file){
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

// defaultBtn.addEventListener("change", function(){
//   const file = this.files[0];
//   if(file){
//     const reader = new FileReader();
//     reader.onload = function(){
//       const result = reader.result;
//       img.src = result;
//       wrapper.classList.add("active");
//     }
//     clearBtn.addEventListener("click", function(){
//       img.src = "";
//       wrapper.classList.remove("active");
//     })
//     reader.readAsDataURL(file);
//   }
//   if(this.value){
//     let valueStore = this.value.match(regExp);
//     fileName.textContent = valueStore;
//   }
// });