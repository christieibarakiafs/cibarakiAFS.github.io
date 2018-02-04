# Chatbot!

## Our favorite printer from Office Space

* (Note: the actual printer in question may have been a fax machine, not a printer)
* (Also this printer/clown occasionally recites lines from the movie It).

## Printer behavior

* Printer will turn on (Printer Status: ON) upon any input 
* (to turn him off, type "off")

* -- Greeting the printer!
* If the user input contains the token "hey", "hiii", "hello", "what's up", or "greetings", the printer will return a random element from its greeting list. E.g. you could say "oh hey" or "hey girl hey", and the printer would recognize it as a greeting. If you greet the printer too many times, he'll get tired and only respond with "Yes?"
* Opportunity for improvement: the regex checks for the presence of the token anywhere in the string, but it would be better if it checked that the token isn't prececed by another letter OR followed by a letter (unless it's a repeat of the last letter). E.g. the current implementation would treat "they" and "hey" as greetings, since they both contain the "hey" token."They" is not okay but "heyyyyyyy" is.

* -- Question and answer
* If you ask the printer a question (specifically one that ends in a question mark), it will attempt to answer you (sort of). If your question contains a token that is reflective of an open-ended question (e.g. "how"), printer will say "I don't know" and repeat your question back to you (sometimes asking the opposite question instead). Otherwise he'll respond randomly yes, no, maybe.

* -- Other things
* If the input is not a greeting, farewell or question, printer will respond with one of the following with varying probability
* Statement that it's printing X number of classmate's document (where x, classmate, and document are randomly selected)
* Random Office Space themed statement
* Printer Error

* -- Saying baaaai!
* Similar to the greeting functionality. If the user input contains one of the goodbye tokens, printer will respond with a random needy farewell.

* -- Unsolved problems
* Could have more robust regex
* Deleting chat items instead of scrolling
