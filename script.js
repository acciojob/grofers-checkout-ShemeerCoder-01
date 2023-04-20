const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);


const getSum = () => {
//Add your code here
  let arr = Array.from(document.getElementsByClassName("price"));
	alert(arr.innerText);
};

getSumBtn.addEventListener("click", getSum);

