a = 180
b = 90
c = 130

# if (a>b){
#     set of statements;
# }

if a > b:
    print("A is bigger")
    # print("A is bigger")
    # print("A is bigger")
    # print("A is bigger")
else:
    print("B is Bigger")
    
print("Simple if example is done")

#Logical AND -  and - Both condition has to satisfy
if (a > b) and (a > c):
    print("A is bigger")
elif (b > c) and (b > a):
    print("B is bigger")
else:
    print("C is Bigger")

#Logical OR - or -  Any one condition has to satisfy

if (a > b) or (a > c):
    print("It will work if any one condition satisfies")
    print("A is bigger")

#comparison operators
# == >= <= ===

x = 100
y = 140

if(x==y):
    print("Both are equal")

#Logical NOT - not or !


if(x!=y):
    print("Both are not equal")

if not(x==y):
    print("Both are not equal")

#nested if

#Logical AND -  and - Both condition has to satisfy
if (a > b) and (a > c):
    print("A is bigger")
    if(x==y):
        print("X and Y are equal")
    else:
        print("X and Y are not equal")
elif (b > c) and (b > a):
    print("B is bigger")
else:
    print("C is Bigger")