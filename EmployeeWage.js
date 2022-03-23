//console.log("Welcome to Employee Wage Problem \n")
//nodeUC1 Employee is Present or Absent.
//const IS_ABSENT = 0;
//let empCheck = Math.floor(Math.random() * 10) %2;
//if(empCheck == IS_ABSENT)
//{
  // console.log("Employee is absent");
//}
//else 
//{
  //  console.log("Employee is present");
//}

//UC2 Calculate Daily EmployeeWage
//console.log("UC2 Calculating wage for Employee");
//const IS_PART_TIME=1;
//const IS_FULL_TIME=2;
//const PART_TIME_HOURS=4;
//const FULL_TIME_HOURS=8;
//const WAGE_PER_HOUR=20;

 //let empHrs=0;
  //empCheck = Math.floor(Math.random() * 10) %3;

//switch(empCheck)
//{
  //   case IS_PART_TIME:
    // empHrs=PART_TIME_HOURS;
      //break;
      //case IS_FULL_TIME:
      //empHrs=FULL_TIME_HOURS;
      //break;
      //default:
      //empHrs=0;
      
//}
 //empWage = empHrs * WAGE_PER_HOUR;
//console.log("Emp wage : " + empWage);

//UC3 Calculate Parttime

        //const present=1;
		//const parttime=2;
		//const salaryperhour=20;
        //	var workinghours;
		//let emp = Math.floor(Math.random() * 10) %  3;
		//if(emp == present){
	    //	    	console.log("Employee is present");
          //      	workinghours=8;
		//}
		//else if (emp == parttime){
		//	console.log("Employee is parttimer");
          //      	workinghours=4;
		//}
		//else{
		//	console.log("Employee is absent");
          //      	workinghours=0;
		//}
        //	const dailywage = (salaryperhour*workinghours);
       	 //	console.log("salary will be ", dailywage);

  //UC4 Adding SwitchCase method
  
 // const present=1;
	//	const parttime=2;
	//	const salaryperhour=20;
      //  	var workinghours;
		//let emp = Math.floor(Math.random() * 10) %  3;
		//switch(emp){
          //  		case 1:
	    	//    		console.log("Employee is present");
              //  		workinghours=8;
                //		break;
            	//	case 2:
                //		console.log("Employee is parttimer");
                //		workinghours=4;
                //		break;
            	//	case 3:
	    	    //		console.log("Employee is absent");
                //		workinghours=0;
                //		break;
            	//	default:
                //		console.log("condition doesent exist")
		//}
        //	const dailywage = (salaryperhour*workinghours);
       	 //	console.log("salary will be ", dailywage);


//UC5 Calculate Wages for a Month
const present=1;
        const parttime=2;
        const salaryperhour=20;
        var employeehours = 0;
        var total = 0;
        var days = 0;
        var workinghours = 0;
        while(days<20)
        {
		let emp = Math.floor(Math.random() * 10) %  3;
		switch(emp){
            case 1:
                
                employeehours=8;
                break;
            case 2:
                employeehours=4;
                break;
            case 3:
                employeehours=0;
                break;
            default:
                console.log("condition doesent exist")
		}
        const dailywage = (salaryperhour*employeehours);
        total = (total + dailywage);
        days = (days+1);
        workinghours = (workinghours+employeehours);
    }
        console.log("Total salary will be ", total);
        console.log("Total working hours will be ", workinghours);