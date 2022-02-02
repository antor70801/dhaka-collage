
; You may customize this and other start-up templates; 
; The location of this template is c:\emu8086\inc\0_com_template.txt

org 100h

.data
message1 dw "Even$"
message2 dw "Odd$"

.code 
mov ax,@data
mov ds,ax

mov ah,01h  ;take an input from user
int 21h
mov ah,0
sub al,48   ;get original number

mov bl,2    ;bl=2
div bl      ;al=al/bl=al/2


cmp ah,0 ;compare modulus is==0(Even)
je even  ;je=jump equal

odd:
mov dx,10
mov ah,02h
int 21h
mov dx,13
mov ah,02h
int 21h
lea dx,message2
mov ah,09h
int 21h

jmp blank

even:    
mov dx,10
mov ah,02h
int 21h
mov dx,13
mov ah,02h
int 21h
lea dx,message1
mov ah,09h
int 21h    

blank:

ret




