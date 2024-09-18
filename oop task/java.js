
//saeed mohamed
//كلاس اسمه Shape. ده الكلاس الأساسي اللي هيبقى الأب لكل الأشكال (زي المربع والمستطيل).
class Shape {
    constructor() {
        if (new.target === Shape) {
            throw new Error("Cannot instantiate Shape directly.");
        }
    }
}
//هنا بنعمل كلاس اسمه Rectangle (المستطيل) وده بيرث من Shape
class Rectangle extends Shape {
    static objectCount = 0; //تعد عدد المستطيلات اللي بنعملها. كل ما نعمل مستطيل جديد العدد ده هيزيد.

    //ه الكونستركتور اللي بياخد العرض width والطول height.
    constructor(width, height) {
        super(); 
        this.width = width;
        this.height = height;
        Rectangle.objectCount++; 
    }

    //دي دالة بتحسب المساحة، وبتضرب العرض في الطول width * height.
    calculateArea() {
        return this.width * this.height;
    }

   //دي دالة بتحسب المحيط، وبتجمع العرض والطول وبعدين تضربهم في 2.
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
        //هنا بنطبع معلومات المستطيل: العرض، الطول، المساحة، والمحيط باستخدام console.log()، وكمان بنستخدم الدوال اللي عملناها قبل كده عشان نحسب المساحة والمحيط.
    displayInfo() {
        console.log(`Rectangle Info:
        Width: ${this.width}, 
        Height: ${this.height}, 
        Area: ${this.calculateArea()}, 
        Perimeter: ${this.calculatePerimeter()}`);
    }
    //الة بنستخدمها لو عايز تحول المستطيل لجملة نصية
    toString() {
        return `Rectangle Info:
        Width: ${this.width}, 
        Height: ${this.height}, 
        Area: ${this.calculateArea()}, 
        Perimeter: ${this.calculatePerimeter()}`;
    }
    //دالة لاسترجاع عدد الأشكال اللي تم إنشاؤها:

    static getObjectCount() {
        return Rectangle.objectCount;
    }
}

class Square extends Rectangle {
    constructor(side) { //: المربع بياخد جنب واحد بس (لأن الطول والعرض هما نفس القيمة).
        super(side, side); //بنبعت قيمة الجنب كعرض وكطول للمستطيل (لأنه في الآخر هو مربع).
    }

    toString() { 
        return `Square Info:
        Side: ${this.width}, 
        Area: ${this.calculateArea()}, 
        Perimeter: ${this.calculatePerimeter()}`;
    }
}


const rect1 = new Rectangle(5, 10);
rect1.displayInfo();
console.log(rect1.toString());

const square1 = new Square(6);
square1.displayInfo();
console.log(square1.toString());

console.log(`Total objects created: ${Rectangle.getObjectCount()}`);

try { //بنمنع إنشاء شكل عام
    const shape = new Shape(); 
} catch (error) {
    console.error(error.message);
}

