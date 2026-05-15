#Delete one letter at a time

#Python

name = input("Enter your name: ")
for i in range(len(name) 0,-1):
    print(name[:i])