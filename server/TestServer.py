import asyncio
from websockets.server import serve

async def echo(websocket):
    async for message in websocket:
        print(message)
        await websocket.send(message)

async def main():
    async with serve(echo, "127.0.0.1", 30001):
        print("Server listen port 30001")
        await asyncio.Future()  # run forever

asyncio.run(main())