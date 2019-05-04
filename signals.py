import json
import requests
import random
import time

def main():

    devices = ["device1", "device2", "device3"]

    prev_time = time.time()
    while True:
        dt = time.time() - prev_time
        if dt > 0.01:
            prev_time = time.time()
 
            for i in range(3):
                v1 = random.uniform(206+(10*i), 220+(10*i))
                v2 = random.uniform(206+(10*i), 220+(10*i))
                v3 = random.uniform(206+(10*i), 220+(10*i))
                i1 = random.uniform(50+(10*i), 52+(10*i))
                i2 = random.uniform(50+(10*i), 52+(10*i))
                i3 = random.uniform(50+(10*i), 52+(10*i))
                p1 = v1 * i1
                p2 = v2 * i2
                p3 = v3 * i3

                output = {
                    'data': [
                        { 'device': devices[i], 'v1': v1},
                        { 'device': devices[i], 'i1': i1},
                        { 'device': devices[i], 'p1': p1},
                        { 'device': devices[i], 'v2': v2},
                        { 'device': devices[i], 'i2': i2},
                        { 'device': devices[i], 'p2': p2},
                        { 'device': devices[i], 'v3': v3},
                        { 'device': devices[i], 'i3': i3},
                        { 'device': devices[i], 'p3': p3}
                    ]
                }

                headers = {'Content-type': 'application/json'}
                r = requests.post("http://localhost:5000/sample", data=json.dumps(output), headers=headers)


if __name__ == '__main__':
    main()
