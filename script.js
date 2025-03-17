        var defaultCategory = 4,
    	showServersIn = 99999999,
    	hug = "https://huggingface.co/datasets/RielitoX/sdjsaidij/resolve/main/",
    	med = "https://www.mediafire.com/file/",
    	arc = "https://archive.org/download/",
        mega = "https://mega.nz/file/"
    	content = [{
    		title: "Windows Legacy",
    		description: "The Older Editions Of Windows",
    		items: [{
    			name: "Windows 1.0",
    			tag: "MS-DOS - FLOPPY",
    			links: [arc + "win-1_202108/WIN1.IMG"]
    		}, {
    			name: "test2",
    			tag: "no",
    			links: [med + "qteigczejthm81g"]
			}, {
				name: "Windows 95 OSR 2",
				tag: "34698-OEM-0039682-72135",
				links: [hug + "sa"],
    		}]
    	}, {
    		title: "Windows XP",
    		description: "All Windows XP Editions",
    		items: [{
    			name: "test",
    			tag: "si",
    			links: [hug + "angry-neighbor-2.1.apk?download=true"]
    		}, ]
    	}, {
    		title: "Windows Vista",
    		description: "All Windows Vista Editions",
    		items: [{
    			name: "Windows Vista Starter",
    			tag: "si",
    			links: [med + "drbucjhchyro239", ],
                buttons: ["Spanish", "English"]
    		}]
    	}, {
    		title: "Windows 7",
    		description: "All Windows 7 Editions",
    		items: [{
    			name: "Windows 7 Starter",
    			tag: "x86",
    			links: [med + "h11pnox3cm2qva6", hug + "Windows%207%20Starter%20x86%20English.iso?download=true"],
                buttons: ["Spanish", "English"]
    		}, {
    			name: "Windows 7 Home Basic",
    			tag: "x86",
    			links: [med + "qteigczejthm81g", hug + "sas"],
                buttons: ["Spanish", "English"]
			}, {
				name: "Windows 7 Home Basic",
				tag: "x64",
				links: [hug + "dadad", med + "sisisi"],
				buttons: ["Spanish", "English"]
    		}]
    	}, {
    		title: "Windows 10",
    		description: "All Windows 10 Editons",
    		items: [{
    			name: "test",
    			tag: "si",
    			links: [med + "h11pnox3cm2qva6"]
    		}, {
    			name: "test2",
    			tag: "no",
    			links: [med + "qteigczejthm81g"]
    		}]
    	}, {
    		title: "Windows 11",
    		description: "All Windows 11 Editions",
    		items: [{
    			name: "2buttons test",
    			tag: "x86",
    			links: [med + "57cbwvz689sekxn", "https://www.youtube.com/watch?v=6OSIwnBvQko"],
    			buttons: ["Spanish", "English"]
    		}]
		}]
    	categoryContainer = document.querySelector("ul.categories"),
    	itemContainer = document.querySelector("ul.items"),
    	buttonContainer = document.querySelector("div.downloadButtons"),
    	downloadsContainer = document.querySelector("section.downloads"),
    	categoryDescription = document.querySelector(".boxTitle span"),
    	searchBox = document.getElementById("optiSearch"),
    	serverList = document.querySelector("article.box"),
    	ad = document.querySelector("aside.right .ad"),
    	chat = document.querySelector("aside.right .chat"),
    	adButton = document.getElementById("adButton"),
    	chatButton = document.getElementById("chatButton"),
    	currentCategory = void 0,
    	selectedItem = void 0;
    content.forEach(function(e, t) {
    	var n = document.createElement("li");
    	n.textContent = e.title, n.addEventListener("pointerdown", function() {
    		changeCategory(t)
    	}), categoryContainer.appendChild(n)
    });

    function changeCategory(e) {
    	e !== currentCategory && (searchBox.value = "", itemContainer.textContent = "", categoryContainer.children[e].classList.add("selected"), currentCategory !== void 0 && categoryContainer.children[currentCategory].classList.remove("selected"), e !== showServersIn ? serverList.style.display = "none" : serverList.style.display = "block", categoryDescription.textContent = content[e].description, createItems(content[e].items), currentCategory = e, selectedItem = void 0, selectItem(content[currentCategory].items[0], 0))
    }

    function createItems(e) {
    	e.forEach(function(t, n) {
    		var o, s = document.createElement("li");
    		s.textContent = t.name, currentCategory !== void 0 ? s.addEventListener("pointerdown", function() {
    			selectItem(content[currentCategory].items[n], n)
    		}) : s.addEventListener("pointerdown", function() {
    			selectItem(e[n], n)
    		}), t.tag !== void 0 && (o = document.createElement("span"), o.textContent = t.tag, o.classList.add("tag"), s.appendChild(o)), itemContainer.appendChild(s)
    	})
    }

    function selectItem(e, t) {
    	t !== selectedItem && (buttonContainer.textContent = "", itemContainer.children[t].classList.add("selected"), selectedItem !== void 0 && itemContainer.children[selectedItem].classList.remove("selected"), e.links && e.links.forEach(function(t, n) {
    		var s = document.createElement("a");
    		e.buttons && e.buttons[n] !== void 0 ? s.textContent = e.buttons[n] : s.textContent = "Download", e.links.length !== 1 && n % 2 === 0 ? s.classList.add("dark") : s.classList.add("turquoise"), s.href = t, s.draggable = !1, buttonContainer.appendChild(s)
    	}), selectedItem = t)
    }
    searchBox.addEventListener("keydown", function() {
    	setTimeout(function() {
    		downloadsContainer.style.display = "block", searchBox.value !== "" ? search(searchBox.value) : changeCategory(defaultCategory)
    	}, 1)
    });

    function search(e) {
    	if (itemContainer.textContent = "", serverList.style.display = "none", currentCategory !== void 0 && (categoryContainer.children[currentCategory].classList.remove("selected"), currentCategory = void 0), selectedItem = void 0, results = [], content.forEach(function(t) {
    			t.items.forEach(function(t) {
    				t.name.toLowerCase().indexOf(e.toLowerCase()) !== -1 && results.push(t)
    			})
    		}), results.length !== 0) categoryDescription.textContent = "Búsqueda", createItems(results), selectItem(results[0], 0);
    	else {
    		categoryDescription.textContent = "Búsqueda - Sin resultados", downloadsContainer.style.display = "none", buttonContainer.textContent = "";
    		var t = document.createElement("a");
    		buttonContainer.appendChild(t)
    	}
    }

    function selectAd() {
    	adButton.classList.contains("selected") ? (ad.style.display = "none", adButton.classList.remove("selected")) : (ad.style.display = "block", adButton.classList.add("selected"), chat.style.display = "none", chatButton.classList.remove("selected"))
    }

    function selectChat() {
    	chatButton.classList.contains("selected") ? (chat.style.display = "none", chatButton.classList.remove("selected")) : (chat.style.display = "block", chatButton.classList.add("selected"), ad.style.display = "none", adButton.classList.remove("selected"))
    }
    searchBox.value = "", changeCategory(defaultCategory)