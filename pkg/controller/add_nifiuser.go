package controller

import (
	"github.com/erdrix/nifikop/pkg/controller/nifiuser"
)

func init() {
	// AddToManagerFuncs is a list of functions to create controllers and add them to a manager.
	AddToManagerFuncs = append(AddToManagerFuncs, nifiuser.Add)
}
