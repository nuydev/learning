#!/usr/bin/bash
#touch myscript.sh
#chmod +x myscript.sh
#which bash

# ECHO COMMAND
echo Hello Script !

#VARIABLES
# Uppercase by convention
#Letters, number, underscores
# NAME="NUY"
# echo "My name is ${NAME}"
#integer
# declare -i x=10
# declare -i y=12
# declare -i z
# z=x+y
# echo "z is " $z
# ((x=10))
# ((y=12))
# ((z=x+y))
# echo "z is " $z

#USER INPUT
# read -p "Enter your name: " NAME
# echo "Hello $NAME, nice to meet you."

#SIMPLE IF STATEMENT
# NAME="JACK"
# if [ "$NAME" == "NUY" ]
# then
#     echo "Your name is NUY"
# elif [ "$NAME" == "JACK" ]
# then
#     echo "Your name is JACK"
# else
#     echo "Your name is not JACK&NUY"
# fi

#COMPARISON
# val1 -eq val2 Return true if the values are equal
# val1 -ne val2 Return true if the values are not equal
# val1 -gt val2 Return true if val1 > val2 
# val1 -ge val2 Return true if val1 >= val2 
# val1 -lt val2 Return true if val1 < val2 
# val1 -le val2 Return true if val1 <= val2 
######
# NUM1=3
# NUM2=5
# if [ "$NUM1" -gt "$NUM2" ]
# then
#     echo "$NUM1 is greater than $NUM2"
# else
#     echo "$NUM1 is less than $NUM2"
# fi

#FILE CONDITIONS
####
# -d file True if thefile is a directory
# -e file True if the file exists 
# -f file True if the provided string is a file
# -g file True if the group id is a file 
# -r file True if the file is readable
# -s file True if the file has a non-zero size
# -u True if the user id is set on a file  
# -w True if the file is writable
# -x True if the file is an executable
####
# FILE="text.txt"
# if [ -f "$FILE" ]
# then
#     echo "$FILE is a file"
# else
#     echo "$FILE is not a file"
# fi

#CASE STATEMENT
# read -p "Are you 21 or over? Y/N " ANSWER
# case "$ANSWER" in
#     [yY] | [yY][eE][sS])
#         echo "You can have a beer :)"
#         ;;
#     [nN] | [nN][oO])
#         echo "Sorry, no drinking"
#         ;;
#     *)
#     echo "Please enter y/yes or n/no"
# esac

# SIMPLE FOR LOOP
# NAMES="NUY MAY"
# for NAME in $NAMES
#     do 
#         echo "Hello $NAME"
# done
# FILES=$(ls *.txt)
# NEW="new"
# for FILE in $FILES
#     do
#         echo "Renaming $FILE to new-$FILES"
#         mv $FILE $NEW-$FILE
# done

#WHILE LOOP -READ THROUGH A FILE LINE BY LINE
# LINE=1
# while read -r CURRENT_LINE
#     do
#         echo "$LINE: $CURRENT_LINE"
#         ((LINE++))
# done < "./new-1.txt"

#FUNCTION
# function sayHello() {
#     echo "Hello world"
# }
# sayHello
# function greet() {
#     echo "Hello, I am $1 and I am $2"
# }
# greet "Nuy" "23"

#CREATE FOLDER AND WRITE TO A FILE
# mkdir Hello
# touch "Hello/world.txt"
# echo "Hello world" >> "Hello/world.txt"
# echo "Create Hello/world.txt"