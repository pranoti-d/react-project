from server import AppServer

if __name__ == '__main__':
   port = int(os.environ.get('PORT', 5000))
   AppServer.run(host='0.0.0.0', port=port, debug=True)
   
