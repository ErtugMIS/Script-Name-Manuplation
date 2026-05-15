#Write one letter at a time:

#Pyton

name = input("Enter your name: ")
for i in range(len(name)):
    print(name[:i+1])