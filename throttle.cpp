
#include "StdAfx.h"

#include <iostream>

using namespace std;

class throttle

{

public:

       int position, Top_position;

    void shut_off();

    void shift(int amount);

       int max(int m);

      

     double flow() const;

     bool is_on() const;

           throttle()

   {

       Top_position = 6;

       position = 0;

   }

  

              throttle(int t)

   {

       Top_position = t;

       position = 0;

   }

  

              throttle(int t, int p)

   {

       Top_position = t;

       position = p;

   }

};

int main()

{

     throttle sample;

     int user_input;

     cout << "This throttle class contains 6 positions." << endl;

     cout << "Enter a number from 0 to 6: ";

     cin >> user_input;

              if (user_input < 0)

       {

              cout << "Error! Throttle input cannot be less than 0!" << endl;

              system("pause");

              return EXIT_FAILURE;

       }

     sample.shut_off();

     sample.shift (user_input);

     while (sample.is_on())

     {

          cout << "The flow is now " << sample.flow() << endl;

          sample.shift(-1);

      }

     cout << "The flow is now off." << endl;

       cout << "" << endl;

       cout << "Now inputting sample data.\n" << endl;

   throttle car;

   cout << "Car's current position: " << car.position << "\nCar's top position: " << car.Top_position << endl;

   throttle truck(30);

   cout << "Trucks's current position: " << truck.position << "\nTruck's top position: " << truck.Top_position << endl;

   throttle shuttle(20, 6);

   cout << "Shuttle's current position: " << shuttle.position << "\nShuttle's top position: " << shuttle.Top_position << endl;

       system("pause");

     return EXIT_SUCCESS;

}

void throttle::shut_off()

{

     position = 0;

}

void throttle::shift (int amount)

{

      position += amount;

      if (position < 0)

          position = 0;

      else if (position > 6)

          position = 6;

}

double throttle::flow() const

{

       return position / 6.0;

}

bool throttle::is_on() const

{

       return (flow() > 0);

}

