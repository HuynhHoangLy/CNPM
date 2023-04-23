export let data = {
    mcps  : [    {coor: [10.881910, 106.804845], id: 1, status: 100},
    {coor: [10.876739, 106.762029], id: 2, status: 0},//
    {coor: [10.895483, 106.809275], id: 3, status:0}, //
    {coor: [10.889069, 106.815225], id: 4, status:0},
    {coor: [10.907109, 106.802225], id: 5, status:0},//
    {coor: [10.912739, 106.808225], id: 6, status:0},//
    {coor: [10.910294, 106.773492], id: 7, status:0},//
    {coor: [10.900812, 106.776142], id: 8, status:100},//
    {coor: [10.870128, 106.796420], id: 9, status:0},
    {coor: [10.899121, 106.797201], id: 10, status:0},//
    {coor: [10.890832, 106.802203], id: 11, status:0},
    {coor: [10.897012, 106.763420], id: 12, status:0},
    {coor: [10.903941, 106.788291], id: 13, status:0},//
    {coor: [10.897322, 106.771491], id: 14, status:100},//
    {coor: [10.874310, 106.785729], id: 15, status:0},
    {coor: [10.879912, 106.782629], id: 16, status:0},
    {coor: [10.893427, 106.785382], id: 17, status:0},//
    {coor: [10.915832, 106.780410], id: 18, status:100},//
    {coor: [10.872122, 106.770219], id: 19, status:0},
    {coor: [10.890777, 106.776712], id: 20, status:0},//
    {coor: [10.879320, 106.775213], id: 21, status:0},
    {coor: [10.889999, 106.763120], id: 22, status:0},
    {coor: [10.889999, 106.793120], id: 23, status:100}],
    routes: []
}
 let routeId = 0;

export const getNewRouteID = () =>{
    let temp = routeId;
    routeId += 1;
    return temp;
}