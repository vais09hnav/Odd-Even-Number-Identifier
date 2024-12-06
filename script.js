function answer() {
    const startNum = parseInt(document.getElementById("num1").value);
    const endNum = parseInt(document.getElementById("num2").value);

    const operation = document.getElementById("operation").value;

    let result = '';

  

        if (operation == "1") {
            
            result = "Odd Numbers: ";
            for (let i = startNum; i <= endNum; i++) {
                if (i % 2 !== 0) {
                    result += i + " ";
                }
            }
        } else if (operation == "2") {
            result = "Even Numbers: ";
            for (let i = startNum; i <= endNum; i++) {
                if (i % 2 === 0) {
                    result += i + " ";
                }
            }
        }
    

    document.getElementById("output").textContent = result;
}
