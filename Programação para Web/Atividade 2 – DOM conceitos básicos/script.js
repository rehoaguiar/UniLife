let count = 0;
        
        function increment() {
            count++;
            document.getElementById("counter").innerText = count;
        }
        
        function decrement() {
            if (count > 0) {
                count--;
                document.getElementById("counter").innerText = count;
            } else {
                alert("O contador já está em zero!");
            }
        }
        
        document.getElementById("textInput").addEventListener("input", function() {
            let text = this.value.replace(/\s/g, "");
            document.getElementById("charCount").innerText = "Caracteres: " + text.length;
        });
        
        document.getElementById("textInput").addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                let text = this.value.trim();
                if (text) {
                    let p = document.createElement("p");
                    p.textContent = text;
                    document.getElementById("output").appendChild(p);
                    this.value = "";
                    document.getElementById("charCount").innerText = "Caracteres: 0";
                }
            }
        });
        
        function addListItem() {
            let listType = document.getElementById("listType").value;
            let listContainer = document.getElementById("lists");
            let list = listContainer.querySelector(listType) || document.createElement(listType);
            
            if (!listContainer.contains(list)) {
                listContainer.appendChild(list);
            }
            
            let item = document.createElement("li");
            item.textContent = "Novo Item";
            list.appendChild(item);
        }
        
        function resetPage() {
            count = 0;
            document.getElementById("counter").innerText = "0";
            document.getElementById("textInput").value = "";
            document.getElementById("charCount").innerText = "Caracteres: 0";
            document.getElementById("output").innerHTML = "";
            document.getElementById("lists").innerHTML = "";
        }