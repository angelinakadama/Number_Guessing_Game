     Math.floor(Math.random()*100)+1;//Generates a random number
     {
         // Intialising component
         Math. random r = newRandom();
         int value= r.Next(100);
         int guessnum;
         int win = 10;
         int guess = 1;
         form3
         {
             InitializeComponent();
         }
         private void button2_Click(object sender)
         {
             Form1 f =new Form1();
             f.Show();
             Application.OpenForms["form3"].Hide();
         }
         private void button1_Click(object sender)
         {
             // Number guessing game
             guessnum = Convert.ToInt100(textBox1.Text);
             while (win >= 0)
             {
                              if (guessnum == Math.random)
                 {
                     if (guess == 1)
                     {
                         label.Text = "Wow You Win";
                     }
                     else
                                             label.Text = "Wow You win the number of guess you made are " + guess;
                     break;
                 }
                 elseif (guessnum < value)
                 {
                     richTextBox1.Text += guessnum +"\n";
                     label.Text = "You lose number of guesses left are " + (10 - guess);
                 }
                                   elseif (guessnum > value)
                 {
                     richTextBox2.Text += guessnum +"\n";
                     label.Text = "You lose and number of guesses left are " + (10 - guess);
                 }
                 guess++;
                 win--;
                 break;
                              }
             if (guess == 10)
                          {
                 label.Text = "You loose,Correct Guess is " + value;
             }
         }
     }
 }
 


