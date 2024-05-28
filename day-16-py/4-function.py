#pre defined function
import random

#user defined function

def printFunction():
    print("Welcome to python")

printFunction()

print(random.random())

random_choice= random.choice(["Rock","Paper","scissor"])

user_choice=input("Enter you choice : ")
print("User chose : ", user_choice)
print("System chose : ", random_choice)

if(random_choice == "Paper") and (user_choice == "Rock"):
    print("Sytem won")
else:
    print("User won")


dice_1 = random.randint(1,6) # include the 6
print(dice_1)

dice_2 = random.randrange(1,6)#exclude the last value
print(dice_2)