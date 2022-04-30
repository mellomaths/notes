# Exemplos de call-backs do Matplotlib para a interação com o usuário
# Para terminar o programa, pressione a tecla 'a'

import numpy as np
import matplotlib.pyplot as plt


figura_centro = (0., 0.)
figura_escala = 1.
rotacao = 0
end_loop = False


def on_press(event):
    global figura_centro
    print('Você pressionou o botão do mouse:', event.button, event.xdata, event.ydata)
    figura_centro = (round(event.xdata, 2), round(event.ydata, 2))
    

def on_key(event):
    global end_loop
    global figura_escala
    global rotacao
    print('Você pressionou a tecla: "', event.key, '"', event.xdata, event.ydata)
    
    if event.key == 'q': 
        end_loop = True
    elif event.key == 'up':
        figura_escala += 0.5
    elif event.key == 'down':
        figura_escala -= 0.5
    elif event.key == 'right':
        rotacao += 2
    elif event.key == 'left':
        rotacao -= 2
        
        

plt.close('all')
fig, ax = plt.subplots()
ax.cla()

# Associa as funções de callback aos eventos de teclado e mouse
cid = fig.canvas.mpl_connect('button_press_event', on_press)
cid = fig.canvas.mpl_connect('key_press_event', on_key)


# Pontos de um quadrado unitário
po = np.array([[-0.5,-0.5,1],[0.5,-0.5,1],[0.5,0.5,1],[-0.5,0.5,1]])
po = np.transpose(po)

# Propriedades dos eixos da figura
ax.set_xlim([-7,7]), ax.set_ylim([-7,7])
ax.set_aspect(1)
plt.axhline(linewidth=1), plt.axvline(linewidth=1)

# Desenha pontos
plt.plot(po[0,:], po[1,:], 'ro')
plt.fill(po[0,:], po[1,:], facecolor=(0,0,0))

# O loop acaba quando a tecla "q" é pressionada
tick = 0
end_loop = False
while not end_loop:
    ax.cla()
    ax.set_xlim([-7,7]), ax.set_ylim([-7,7])
    ax.set_aspect(1)
    
    # plt.axhline(linewidth=1), plt.axvline(linewidth=1)
    
    x, y = figura_centro
    matriz_de_translacao = np.array([[1,0,x],
                                     [0,1,y],
                                     [0,0,1]])
    
    matriz_de_escala = np.array([[figura_escala,0,0],
                                 [0,figura_escala,0],
                                 [0,0,1]])
    
    theta = np.radians(rotacao*tick)
    seno = np.sin(theta)
    cosseno = np.cos(theta)
    matriz_de_rotacao = np.array([[cosseno,-seno,0],
                                  [seno,cosseno,0],
                                  [0,0,1]])
    
    
    T = np.matmul(matriz_de_translacao, matriz_de_escala)
    T = np.matmul(T, matriz_de_rotacao)
    pT = np.matmul(T, po)
    
    if rotacao != 0: tick += 1
    
    plt.fill(pT[0,:], pT[1,:], facecolor=(1, 0, 0))   
    plt.pause(0.1)