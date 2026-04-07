function firstWord(s) {
  // your code here

	if (!s) return '';

    // Step 1: Remove leading whitespace so we find the actual first word
    const trimmedStr = s.trimStart();

    // Step 2: Find the first space in the remaining string
    const firstSpaceIndex = trimmedStr.indexOf(' ');

    // Step 3: If no space exists, return the whole trimmed string.
    // Otherwise, return everything up to the space.
    return firstSpaceIndex === -1 
        ? trimmedStr 
        : trimmedStr.substring(0, firstSpaceIndex);
}
// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
