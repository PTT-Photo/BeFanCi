document.getElementById('Body-image').addEventListener('click', function() {
    showCategoryItems('Body-items');
});

document.getElementById('Eyes-image').addEventListener('click', function() {
    showCategoryItems('Eyes-items');
});

document.getElementById('Eyebrows-image').addEventListener('click', function() {
    showCategoryItems('Eyebrows-items'); 
});

document.getElementById('Mouth-image').addEventListener('click', function() {
    showCategoryItems('Mouth-items');
});

document.getElementById('Hair-image').addEventListener('click', function() {
    showCategoryItems('Hair-items');
});

document.getElementById('Top-image').addEventListener('click', function() {
    showCategoryItems('Top-items');
});

document.getElementById('Bottom-image').addEventListener('click', function() {
    showCategoryItems('Bottom-items');
});

document.getElementById('Shoes-image').addEventListener('click', function() {
    showCategoryItems('Shoes-items');
});

document.getElementById('Hat-image').addEventListener('click', function() {
    showCategoryItems('Hat-items');
});
function showCategoryItems(categoryId) {
    // ซ่อนทุกหมวดหมู่ก่อน
    var itemGrids = document.querySelectorAll('.item-grid');
    itemGrids.forEach(function(grid) {
        grid.style.display = 'none';
    });
    
    // แสดงหมวดหมู่ที่เลือก
    var selectedCategory = document.getElementById(categoryId);
    selectedCategory.style.display = 'grid';
}


// เซฟรูป
document.getElementById('saveButton').addEventListener('click', function() {
    var characterDiv = document.querySelector('.character');

    // ใช้ html2canvas แคปหน้าจอของ div ตัวละคร
    html2canvas(characterDiv).then(function(canvas) {
        // แปลง canvas เป็นรูปภาพ
        var image = canvas.toDataURL("image/png");

        // สร้างลิงก์ชั่วคราวเพื่อดาวน์โหลดรูป
        var link = document.createElement('a');
        link.href = image;
        link.download = 'BeFanci.png';
        link.click();
    });
});


// ใส่รูป
function changeCharacterPart(part, image) {
    document.getElementById(`character-${part.toLowerCase()}`).src = image;
}

document.getElementById('Body-image').addEventListener('click', function() {
    showCategoryItems('Body-items');
});

document.getElementById('Eyes-image').addEventListener('click', function() {
    showCategoryItems('Eyes-items');
});

document.getElementById('Eyebrows-image').addEventListener('click', function() {
    showCategoryItems('Eyebrows-items');
});

document.getElementById('Mouth-image').addEventListener('click', function() {
    showCategoryItems('Mouth-items');
});

document.getElementById('Hair-image').addEventListener('click', function() {
    showCategoryItems('Hair-items');
});


// ฟังก์ชันเพื่อบันทึกรูปภาพจาก canvas
document.getElementById('saveButton').addEventListener('click', function() {
    var canvas = document.getElementById('canvas');
    var image = canvas.toDataURL("image/png");
    
    // สร้างลิงก์ชั่วคราวเพื่อดาวน์โหลดรูป
    var link = document.createElement('a');
    link.href = image;
    link.download = 'character.png';
    link.click();
});









// แบร็คกราวรูปภาพ
let lastClickedButton = null;

function changeBackgroundImage(backgroundImage, imgElementId, newImageSrc) {
    var characterDiv = document.querySelector('.character');
    characterDiv.style.backgroundImage = `url('${backgroundImage}')`;

    var img = document.getElementById(imgElementId);
    img.src = newImageSrc;

    if (lastClickedButton && lastClickedButton !== imgElementId) {
        var lastImg = document.getElementById(lastClickedButton);
        lastImg.src = lastImg.src.replace('_Click', ''); // รีเซ็ตภาพกลับเป็นภาพเดิม
    }

    lastClickedButton = imgElementId;
}

document.getElementById('gray-bg-button').addEventListener('click', function() {
    changeBackgroundImage('Gray_BG.png', 'G-Click', 'G_Click.png');
});

document.getElementById('blue-bg-button').addEventListener('click', function() {
    changeBackgroundImage('Blue_BG.png', 'B-Click', 'B_Click.png'); 
});

document.getElementById('blue2-bg-button').addEventListener('click', function() {
    changeBackgroundImage('Blue2_BG.png', 'BB-Click', 'BB_Click.png'); 
});

document.getElementById('green-bg-button').addEventListener('click', function() {
    changeBackgroundImage('Green_BG.png', 'GR-Click', 'GR_Click.png'); 
});

document.getElementById('yellow-bg-button').addEventListener('click', function() {
    changeBackgroundImage('Yellow_BG.png', 'Y-Click', 'Y_Click.png'); 
});

document.getElementById('orange-bg-button').addEventListener('click', function() {
    changeBackgroundImage('Orange_BG.png', 'O-Click', 'O_Click.png'); 
});

document.getElementById('red-bg-button').addEventListener('click', function() {
    changeBackgroundImage('Red_BG.png', 'R-Click', 'R_Click.png'); 
});

document.getElementById('pink2-bg-button').addEventListener('click', function() {
    changeBackgroundImage('Pink2_BG.png', 'Pink2-Click', 'Pink2_Click.png'); 
});

document.getElementById('pink1-bg-button').addEventListener('click', function() {
    changeBackgroundImage('Pink1_BG.png', 'Pink1-Click', 'Pink1_Click.png'); 
});

document.getElementById('purple-bg-button').addEventListener('click', function() {
    changeBackgroundImage('Purple_BG.png', 'PU-Click', 'PU_Click.png'); 
});

document.getElementById('cyan-bg-button').addEventListener('click', function() {
    changeBackgroundImage('Cyan_BG.png', 'C-Click', 'C_Click.png'); 
});

document.getElementById('black-bg-button').addEventListener('click', function() {
    changeBackgroundImage('black_BG.png', 'Bl-Click', 'Bl_Click.png'); 
});



document.getElementById("Body-image").addEventListener("click", function() {
        var img = document.getElementById("Body-Click");
        // เปลี่ยนภาพเมื่อคลิก
        if (img.src.includes("Body.PNG")) {
            img.src = "Body_Click.PNG"; // เปลี่ยนเป็นภาพใหม่
        } else {
            img.src = "Body_Click.PNG"; // เปลี่ยนกลับเป็นภาพเดิมหากคลิกอีกครั้ง
        }
    });    
document.getElementById("Eyes-image").addEventListener("click", function() {
        var img = document.getElementById("Eyes-Click");
        // เปลี่ยนภาพเมื่อคลิก
        if (img.src.includes("Eyes.PNG")) {
            img.src = "Eyes_Click.PNG"; // เปลี่ยนเป็นภาพใหม่
        } else {
            img.src = "Eyes_Click.PNG"; // เปลี่ยนกลับเป็นภาพเดิมหากคลิกอีกครั้ง
        }
    });
document.getElementById("Eyebrows-image").addEventListener("click", function() {
        var img = document.getElementById("Eyebrows-Click");
        // เปลี่ยนภาพเมื่อคลิก
        if (img.src.includes("Eyebrows.PNG")) {
            img.src = "Eyebrows_Click.PNG"; // เปลี่ยนเป็นภาพใหม่
        } else {
            img.src = "Eyebrows_Click.PNG"; // เปลี่ยนกลับเป็นภาพเดิมหากคลิกอีกครั้ง
        }
    });
document.getElementById("Mouth-image").addEventListener("click", function() {
        var img = document.getElementById("Mouth-Click");
        // เปลี่ยนภาพเมื่อคลิก
        if (img.src.includes("Mouth.PNG")) {
            img.src = "Mouth_Click.PNG"; // เปลี่ยนเป็นภาพใหม่
        } else {
            img.src = "Mouth_Click.PNG"; // เปลี่ยนกลับเป็นภาพเดิมหากคลิกอีกครั้ง
        }
    });
document.getElementById("Hair-image").addEventListener("click", function() {
        var img = document.getElementById("Hair-Click");
        // เปลี่ยนภาพเมื่อคลิก
        if (img.src.includes("Hair.PNG")) {
            img.src = "Hair_Click.PNG"; // เปลี่ยนเป็นภาพใหม่
        } else {
            img.src = "Hair_Click.PNG"; // เปลี่ยนกลับเป็นภาพเดิมหากคลิกอีกครั้ง
        }
    });
document.getElementById("Top-image").addEventListener("click", function() {
        var img = document.getElementById("Top-Click");
        // เปลี่ยนภาพเมื่อคลิก
        if (img.src.includes("Top.PNG")) {
            img.src = "Top_Click.PNG"; // เปลี่ยนเป็นภาพใหม่
        } else {
            img.src = "Top_Click.PNG"; // เปลี่ยนกลับเป็นภาพเดิมหากคลิกอีกครั้ง
        }
    });
document.getElementById("Bottom-image").addEventListener("click", function() {
        var img = document.getElementById("Bottom-Click");
        // เปลี่ยนภาพเมื่อคลิก
        if (img.src.includes("Bottom.PNG")) {
            img.src = "Bottom_Click.PNG"; // เปลี่ยนเป็นภาพใหม่
        } else {
            img.src = "Bottom_Click.PNG"; // เปลี่ยนกลับเป็นภาพเดิมหากคลิกอีกครั้ง
        }
    });
document.getElementById("Shoes-image").addEventListener("click", function() {
        var img = document.getElementById("Shoes-Click");
        // เปลี่ยนภาพเมื่อคลิก
        if (img.src.includes("Shoes.PNG")) {
            img.src = "Shoes_Click.PNG"; // เปลี่ยนเป็นภาพใหม่
        } else {
            img.src = "Shoes_Click.PNG"; // เปลี่ยนกลับเป็นภาพเดิมหากคลิกอีกครั้ง
        }
    });
document.getElementById("Hat-image").addEventListener("click", function() {
        var img = document.getElementById("Hat-Click");
        // เปลี่ยนภาพเมื่อคลิก
        if (img.src.includes("Hat.PNG")) {
            img.src = "Hat_Click.PNG"; // เปลี่ยนเป็นภาพใหม่
        } else {
            img.src = "Hat_Click.PNG"; // เปลี่ยนกลับเป็นภาพเดิมหากคลิกอีกครั้ง
        }
    });