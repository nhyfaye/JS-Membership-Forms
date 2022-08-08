const prompt = require("prompt-sync")();
var input = require('readline-sync'); 


class Member { 
    constructor(name, membershipType, dateJoined, dateOfBirth, pointsEarned) { 
      this.name = name; 
      this.membershipType = membershipType; 
      this.dateJoined = dateJoined; 
      this.dateOfBirth = dateOfBirth; 
      this.pointsEarned = pointsEarned; 
    } 
    getMemberDetails() { 
      return "Name: " + this.name + 
      "\nMemberShip type: " + this.membershipType + 
      "\nDate Join: " + this.dateJoined + 
      "\nDate of Birth: " + this.dateOfBirth +
      "\nPoint Earned: " + this.pointsEarned;  
    } 
  } 
  class MemberGroup { 
    constructor() { 
      this.memberOfXYZ = [] 
      this.memberOfXYZ.push(new Member("Leonardo", "gold", "1 Dec 2019", "1 Jan 1980", 1400)); 
      this.memberOfXYZ.push(new Member("Catherine", "Ruby", "14 Jan 2020", "28 Oct 1985", 250)); 
      this.memberOfXYZ.push(new Member("Luther", "Gold", "29 Apr 2020", "16 Mar 1992", 3350)); 
      this.memberOfXYZ.push(new Member("Bruce", "Diamond", "3 Jun 2020", "18 Mar 1994", 40200)); 
      this.memberOfXYZ.push(new Member("Amy", "Ruby", "5 Jun 2020", "31 May 2000", 500)); 
    } 
  
    allMember() { 
        console.table(this.memberOfXYZ)
      } 
    
    onlyShowMembName(){
        const newList = this.memberOfXYZ.map(member=> member.name)
        console.table(newList);

    }

      
    newMember(){
        const date = new Date();
        const formattedDate = date.toLocaleDateString('en-GB', {
            day: 'numeric', month: 'short', year: 'numeric'
          }).replace(/ /g, ' ');
        this.memberOfXYZ
        var newName = input.question("Please enter Name ");
        var newDOB = input.question ("Please Enter DOB:");
        var newDateJoined = formattedDate;
        this.memberOfXYZ.push(new Member (newName, "New", newDateJoined,newDOB, 0));
        console.log("New Member " + newName + " Added!")
    }

    selectedMember(){
        this.memberOfXYZ
        const newList = this.memberOfXYZ.map(member=> member.name)
        console.table(newList);
        var inputName = input.question("Please enter index of member: ");
        console.log(this.memberOfXYZ[inputName])
        //if (inputName = this.memberOfXYZ[name])
        //return Member.getMemberDetails.memberOfXYZ; 
        
              }
        }


console.log("Welcome to XYZ Membership Loyalty Programme!") 
var name = input.question("Please enter your name? ") 
var xyzMemberGroup = new MemberGroup(); 
let inputMenu = [
    {Desc: "Display all members' information"},
    {Desc: "Display members' information"},
    {Desc: "Add new member"},
    {Desc: "Update points earned"},
    {Desc: "Statistics"},
    {Desc: "Exit"} 
]
console.table(inputMenu);
var ans; 
do{  
    let a = prompt('Hi ' + name + ', please select your choice: ') 
    switch (a) {
    case '0':
        xyzMemberGroup.allMember(); 
        break;
    case '1':
        xyzMemberGroup.selectedMember();
        break;
    case '2':
        xyzMemberGroup.newMember();
        break;
    case '3':
        xyzMemberGroup.onlyShowMembName();
        console.log("Sorry, work in progress!");
        break;
    case "4":
        console.log("Sorry, work in progress!");
        break;
    case "5":
        console.log("Thank you, have a nice day! Bye!");
        break;
    default:
        ans = prompt("Do you want to Continue? Y/N ");
    }
} while (ans != 'N')