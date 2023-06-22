export function validAnagram() {
   if (s.length !== t.length) return false;

      var freqLetters = new Array(26).fill(0);

      for (var i = 0; i < s.length; i++) {
         freqLetters[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
         freqLetters[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
      }

      for (var i = 0; i < freqLetters.length; i++) {
         if (freqLetters[i] !== 0) return false;
      }

   return true;
}