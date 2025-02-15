const userProfile = {
  name: "Alice",
  age: 28,

  details: function () {
    return `${this.name} is ${this.age} years old.`;
  },

  updateAge(newAge) {
    if (newAge <= 0) {
      console.log("Invalid age.");
      return;
    }

    this.age = newAge;
  },
};

userProfile.updateAge(30);
userProfile.updateAge(0);

console.log(userProfile.details());
