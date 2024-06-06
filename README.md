# code-of-africa-challange 
This repository is combining all challange from code of africa taskforce

# code-of-africa-challange { interactive photo gallery}
this  Interactive photo gallery folder combine html, css and java script code for figima intaface, as it was provided 

# UI challenge 
To implement an interactive photo gallery as specified, we'll need to set up a responsive layout that allows for image thumbnail navigation and full-size image viewing. Here's a step-by-step guide to achieving this:

Step 1: Set Up HTML Structure
We'll create an HTML structure that includes thumbnails and a modal for viewing full-size images.

Step 2: Add CSS for Styling
Create a style.css file to style the gallery and the modal.

Step 3: Add JavaScript for Interactivity
Create a script.js file to handle the image clicks and modal functionality.

Explanation:
HTML Structure:

Thumbnails are contained within div.thumbnail elements. Each thumbnail has a data-full attribute pointing to the full-size image source.
A modal is included for displaying the full-size image with a caption.
CSS Styling:

The gallery container and thumbnails are styled for a clean layout.
The modal is styled to cover the entire screen with a semi-transparent background.
JavaScript Functionality:

Event listeners are added to each thumbnail to open the modal with the corresponding full-size image and caption.
The modal can be closed by clicking the close button or anywhere outside the image.
This setup should provide a responsive and interactive photo gallery that works on both desktop and mobile devices.

# Coding Challenge 1: Array Manipulation

To solve the problem of finding a contiguous subarray within an array that sums up to a target, we can use a technique known as the Sliding Window approach. This method allows us to achieve the desired time complexity of 
𝑂
(
𝑛
)
O(n) and space complexity of 
𝑂
(
1
)
O(1).

Sliding Window Technique:
Initialize Two Pointers: Start with two pointers, start and end, both at the beginning of the array.
Expand the Window: Move the end pointer to the right to expand the window, adding the current element to a running sum.
Shrink the Window: If the running sum exceeds the target, move the start pointer to the right to shrink the window, subtracting the elements that are no longer in the window from the running sum.
Check the Sum: At each step, check if the running sum equals the target. If it does, return true.
Complete the Search: If you complete the loop without finding the target sum, return false.
Here's the implementation of the above logic in Python:

# code

def subarray_sum_exists(arr, target):
    start = 0
    current_sum = 0
    
    for end in range(len(arr)):
        current_sum += arr[end]
        
        while current_sum > target and start <= end:
            current_sum -= arr[start]
            start += 1
        
        if current_sum == target:
            return True
    
    return False

# Example usage:
arr = [4, 2, 7, 1, 9, 5]
target = 17
print(subarray_sum_exists(arr, target))  # Output: true


# Explanation:

Initialization:

start pointer is set to 0.
current_sum is initialized to 0.
Expanding the Window:

Loop through each element using the end pointer.
Add arr[end] to current_sum.
Shrinking the Window:

While current_sum exceeds the target, move the start pointer to the right and subtract arr[start] from current_sum.
Checking for the Target Sum:

After updating the current_sum, check if it equals the target. If it does, return true.
Returning the Result:

If the loop completes without finding a subarray that sums up to the target, return false.
This approach ensures that each element is added and subtracted at most once, resulting in an 
𝑂
(
𝑛
)
O(n) time complexity. The space complexity is 
𝑂
(
1
)
O(1) as we only use a few extra variables regardless of the input size.

# coding challenge 2


To solve the given problem, we need to implement a function that transforms a string based on the rules provided:

If the length of the string is divisible by 3, reverse the entire string.
If the length of the string is divisible by 5, replace each character with its ASCII code.
If the length of the string is divisible by both 3 and 5 (i.e., 15), perform both operations in the specified order (reverse first, then replace each character with its ASCII code).
Let's break down the steps and implement the solution in Python:

# Steps:
Calculate the length of the string.
Check if the length is divisible by 15. If true, reverse the string and then replace each character with its ASCII code.
Check if the length is divisible by 5. If true, replace each character with its ASCII code.
Check if the length is divisible by 3. If true, reverse the string.
Return the transformed string based on the above checks.

# Implementation:

def transform_string(s):
    length = len(s)
    
    if length % 15 == 0:
        # Reverse the string and replace each character with its ASCII code
        reversed_string = s[::-1]
        ascii_transformed = ' '.join(str(ord(char)) for char in reversed_string)
        return ascii_transformed
    elif length % 5 == 0:
        # Replace each character with its ASCII code
        ascii_transformed = ' '.join(str(ord(char)) for char in s)
        return ascii_transformed
    elif length % 3 == 0:
        # Reverse the string
        reversed_string = s[::-1]
        return reversed_string
    else:
        # No transformation
        return s

# Example usage
print(transform_string("Hamburger"))  # Output: "regrubmaH"
print(transform_string("Pizza"))      # Output: "80 105 122 122 97"
print(transform_string("Chocolate Chip Cookie"))  # Output: "eikooCpihCetalocohC"


# Explanation:
Length Calculation: First, we calculate the length of the input string.
Divisibility Check for 15: If the length is divisible by 15, we reverse the string and then replace each character with its ASCII code.
Divisibility Check for 5: If the length is divisible by 5 (but not necessarily by 15), we replace each character with its ASCII code.
Divisibility Check for 3: If the length is divisible by 3 (but not necessarily by 15 or 5), we reverse the string.
Return the Result: Depending on the conditions, we return the transformed string.
This solution ensures that we handle all possible cases as per the given constraints and rules. The time complexity is 
𝑂
(
𝑛
)
O(n) where 
𝑛
n is the length of the string, and the space complexity is also 
𝑂
(
𝑛
)
O(n) to store the transformed string.