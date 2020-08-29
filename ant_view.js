/* 
 * Get ant's view in black & view 
 */

var pixels_string = "0.02809348 0.02809362 0.02809371 0.02809358 0.02802274 0.02534715 0.01323719 0.00641185 0.00698414 0.00445725 0.00145148 0.00141688 0.00146376 0.0095984 0.02093359 0.02153072 0.01691096 0.02621706 0.02775399 0.02260489 0.01063766 0.00658173 0.00766665 0.00669992 0.02129426 0.02747739 0.01480761 0.01114219 0.01401252 0.01056908 0.0089196 0.01826739 0.02716494 0.02753116 0.02119466 0.00997582 0.02608963 0.02624305 0.02642368 0.02643276 0.02604479 0.02256461 0.02100084 0.02330726 0.02270315 0.01617121 0.01201236 0.0069531 0.00456964 0.00680021 0.0119546 0.01199982 0.01128672 0.01450142 0.0147074 0.02042906 0.02173917 0.02399593 0.02453195 0.02227205 0.02448415 0.02583777 0.02093318 0.02102461 0.02332392 0.02135191 0.01459604 0.02339044 0.0263201 0.02597705 0.02197327 0.01123216 0.01638055 0.01891862 0.02140782 0.02149872 0.02129837 0.02060465 0.02137756 0.0263568 0.02745048 0.02612576 0.02215824 0.01803985 0.01287924 0.01215439 0.01195312 0.00699553 0.00552771 0.00625981 0.00725179 0.01062857 0.01321887 0.01884286 0.01896581 0.02129963 0.02148684 0.02135897 0.01512044 0.01440131 0.01874401 0.02295203 0.02261178 0.0211823 0.0214476 0.02162868 0.02103885 0.01498784 0.0062291 0.00632622 0.00647791 0.00649478 0.0064321 0.00670062 0.02903899 0.03393687 0.03663646 0.03542199 0.0303617 0.0089313 0.01107549 0.00616726 0.00657158 0.02574917 0.02900163 0.00722749 0.00507158 0.00564096 0.00560563 0.00616482 0.00639651 0.00656007 0.01333395 0.0294248 0.03075085 0.03137376 0.03217563 0.03390107 0.03339787 0.03088773 0.02544371 0.02975447 0.0303617 0.0303617 0.00141688 0.0014187 0.00146121 0.0015136 0.00157978 0.01400036 0.03387941 0.07162627 0.07286809 0.07246327 0.03605574 0.03117135 0.03244506 0.02874241 0.02947397 0.03633534 0.03724369 0.02846206 0.01109048 0.01109166 0.01109434 0.01109689 0.01110056 0.01135148 0.03056412 0.06777846 0.07023674 0.07185603 0.07216334 0.07263359 0.07196699 0.03572794 0.03298173 0.06841504 0.06902227 0.06877172 0.03157617 0.03170029 0.03218341 0.03250566 0.03278745 0.03319546 0.06736267 0.07001689 0.07064156 0.07048014 0.06821263 0.03785092 0.06760539 0.03619744 0.03704128 0.06801022 0.06720057 0.0356244 0.03480399 0.0347077 0.03476581 0.03479551 0.03477431 0.03490015 0.0368811 0.06861745 0.07095367 0.07135003 0.07119748 0.0709144 0.06951572 0.03785092 0.03785092 0.06931199 0.06994567 0.06960302 0.03844805 0.03842973 0.03887168 0.03958867 0.03958055 0.04139178 0.06230563 0.06607935 0.06635413 0.06618555 0.06364585 0.05792394 0.06251 0.04798466 0.04899141 0.06280593 0.06177897 0.04313065 0.04739502 0.04790956 0.04392806 0.04784794 0.04534223 0.04627332 0.05308489 0.06419173 0.06638332 0.06701579 0.06701048 0.06671414 0.06580099 0.06139393 0.05956139 0.06531311 0.06501578 0.06566952 0.0544527 0.06061046 0.05319215 0.05753805 0.056171 0.05862697 0.05859663 0.0565969 0.05506645 0.05767388 0.05952528 0.05698238 0.05507348 0.05348507 0.05747108 0.06262342 0.05388 0.04956149 0.05650897 0.06118805 0.0602609 0.05007795 0.05394468 0.05966971 0.06004912 0.05294808 0.05789906 0.0578311 0.05977087 0.05090283 0.05166782 0.06188312 0.06232507 0.04982329 0.04785997 0.05920197 0.05225789 0.06133189 0.06095417 0.04792595 0.05705991 0.05620568 0.05324409 0.06031963 0.06194473 0.05295951 0.05643244 0.04959055 0.05505408 0.05697975 0.06308165 0.06181343 0.04145696 0.05535023 0.05758702 0.05728553 0.06287328 0.05862721 0.0424244 0.05706757 0.05917406 0.06186348 0.0601557 0.04816162 0.04613075 0.05721017 0.06244437 0.06298463 0.05450024 0.04473102 0.04642273 0.05809829 0.05236032 0.04918484 0.04875215 0.04340836 0.04323112 0.06318508 0.06436912 0.06307702 0.05059243 0.04635693 0.05146309 0.040915 0.0471446 0.06326733 0.06573109 0.06012033 0.04025347 0.05847894 0.04916531 0.04041163 0.05355421 0.06439212 0.06501391 0.04535772 0.04740893 0.05895436 0.04271593 0.04559785 0.05717632 0.06407254 0.0646494 0.04084004 0.05178977 0.05668067 0.04452295 0.05491728";

var w = 36;
var h = 10;
var img = IJ.createImage("Ant's view", "BW", w, h, 1);
var ip = img.getProcessor();

var pixels = pixels_string.split(" ");

var id_pix = 0;
for (var y=0; y<h; y+=1){
    for (var x=0; x<w; x+=1) {
        ip.putPixel(x,y,pixels[id_pix]*255*10);
        id_pix+=1;
    }
}

img.show();