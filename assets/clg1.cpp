#include <iostream>
#include <queue>
#include <vector>

using namespace std;

struct data
{
    string subject, time;
};

int main()
{
    vector<queue<data>> multiList(7);
    multiList[0].push({"DS lecture", "9-10"});
    multiList[0].push({"DS Tut", "11-12"});
    multiList[0].push({"DBS Tut", "3-4"});
    multiList[1].push({"DBS Tut", "3-4"});
    multiList[2].push({"DBS Tut", "3-4"});
    multiList[3].push({"DBS Tut", "3-4"});
    multiList[3].push({"DBS Tut", "3-4"});
    multiList[5].push({"DBS Tut", "3-4"});

    return 0;
}