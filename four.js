//  program to find the HCF or GCD of two integers
// The Highest Common Factor (HCF) or Greatest Common Divisor (GCD) of two integers is the largest integer that can exactly divide both integers (without a remainder).

// For example, the HCF of 60 and 72 is 12.

let nums1=60,nums2=72;
let hcf=0;
for(let i=1;i<=nums1 && i<=nums2;i++){
    if(nums1%i==0 && nums2%i==0){
        hcf=i;
    }
}
console.log(hcf);


//while loop
while(nums1 != nums2){
    if(nums1 > nums2){
        nums1 = nums1 - nums2;
    }else{
        nums2 -= nums1;
    }
}
console.log(nums1);