let age = 19;
let hasLicense = true;

userCanDriveOrNot(age, hasLicense);

function userCanDriveOrNot(age, license) {
    if (age >= 18 && license == true) {
        console.log("You can drive");
    } else {
        console.log("You cannot drive");
    }
}
